import { Injectable } from '@angular/core';
import { RoutePair } from '../interfaces/pair-route';
import { RouteResult } from '../interfaces/route-result';
import { GeocodeResult } from '../interfaces/geocode-result';
import { MapApiService } from './map-api.service';
import { InteractToItem } from '../interfaces/interact-to-item.enum';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { EmptyState, MapState, ToolState, ToolType } from '../interfaces/map-state';
import { AgentProfile } from '../interfaces/agent-profile';
import { WebApiService } from './web-api.service';
import { Meta } from '@angular/platform-browser';
import { GeneralHelper } from './Util/general-helper';
import _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RealstateData } from '../interfaces/realstate-item';
import { groupBy } from 'underscore';
import { ToolsNavigationService } from './tools-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class MapStateService {
  private routeDatabase: RoutePair[] = [];
  private initState: MapState = new EmptyState();
  public stateObservable: BehaviorSubject<MapState> = new BehaviorSubject(this.initState);

  public itemSelectedObservable: ReplaySubject<GeocodeResult | null> = new ReplaySubject(undefined);

  constructor(private mapApiService: MapApiService,
    private webApiService: WebApiService,
    private meta: Meta,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private toolsNavigationService: ToolsNavigationService) {
    this.stateObservable.subscribe(() => {
      this.rerenderMap();
    })
  }

  rerenderMap() {
    this.onRerenderBaseLayer();
  }

  onRerenderBaseLayer() {
    this.mapApiService.baseGroup?.setVisibility(true);
    this.mapApiService.renderLocationsToMap(this.mapApiService.baseGroup, this.stateObservable.value.geoItems,
      (type: InteractToItem, item: GeocodeResult) => {
        this.interactionCallBack(type, item);
      });
  }

  renderMesureTool(state: boolean) {
    this.mapApiService.measureGroup?.setVisibility(state);
    if (!state) {
      return;
    }
    var groupToRender = this.mapApiService.measureGroup;
    groupToRender?.removeAll();

    this.mapApiService.renderInteractionsToMap(groupToRender, this.stateObservable.value.geoItems, async (type: InteractToItem, item: GeocodeResult) => {
      if (this.stateObservable.value.geoCalculatingItems.some(i => this.compareLocation(i, item))) {
        return;
      }
      this.stateObservable.value.geoCalculatingItems.push(item);
      var calculatingItems = this.stateObservable.value.geoCalculatingItems;
      // if (calculatingItems.length == 1) {
      //   groupToRender?.removeAll();
      // }
      this.mapApiService.renderCirclesToMap(groupToRender, calculatingItems, 100, { r: 17, g: 120, b: 100, a: 0.8 });
      if (calculatingItems.length == 2) {
        var route = await this.getRoute(calculatingItems[0], calculatingItems[1]);
        this.mapApiService.renderRouteShapesToMap(groupToRender, [route]);
        var route = await this.getRoute(calculatingItems[0], calculatingItems[1]);
        var travelSummary = route.sections[0].travelSummary;
        this.snackBar.open(`${Math.round(travelSummary.length / 100) / 10} Km, ${Math.round(travelSummary.duration / 60)} Phút`, "", { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' })
        this.stateObservable.value.geoCalculatingItems = [];
      }
    });
  }

  async reloadState(stateId: string): Promise<MapState | null> {
    if (!stateId) {
      return null;
    }
    var state = await this.webApiService.getStateById(stateId);
    if (!state) {
      return null;
    }
    this.updateMetaAndTitle(state?.agent);
    this.stateObservable.next(state);
    return state;
  }

  private updateMetaAndTitle(agent: AgentProfile | undefined) {
    document.title = `Thông tin nhà trọ của ${agent?.name}`;
    this.meta.addTag({ property: "og:title", content: `Thông tin nhà trọ của ${agent?.name}` })
    this.meta.addTag({ property: "og:description", content: agent?.description ?? "" })
    this.meta.addTag({ property: "og:image", content: `${agent?.image}` })
    this.meta.addTag({ property: "og:url", content: `	http://146.190.84.59:8000/main/${agent?.phone}` })
  }

  setSelectedItem(item: GeocodeResult) {
    this.stateObservable.value.selectedItem = item;
    this.stateObservable.next(this.stateObservable.value);
  }

  setToolStatus(type: ToolType | undefined) {
    this.stateObservable.value.selectedTool = type;
    switch (type) {
      case ToolType.mesure:
        this.stateObservable.value.calculatedResult=undefined;
        break;
      default:
        this.mapApiService.measureGroup.removeAll(); 
        this.mapApiService.radiusGroup.removeAll();   
        break;
    }
    this.stateObservable.next(this.stateObservable.value);
  }

  setRadius(distance: number)
  {
    this.stateObservable.value.distance = distance;
    this.stateObservable.next(this.stateObservable.value);
  }

  setAgent(agent: AgentProfile) {
    this.stateObservable.value.agent = agent;
    this.stateObservable.next(this.stateObservable.value);
  }

  async getGeoCodeResult(address: string, dosave: boolean): Promise<GeocodeResult[]> {
    if (this.stateObservable.value.geoCodeDatabase[address]) {
      return this.stateObservable.value.geoCodeDatabase[address];
    }
    try {
      var apiResults = await this.mapApiService.geocode(address);
      if (dosave) {
        this.stateObservable.value.geoCodeDatabase[address] = apiResults;
        this.stateObservable.next(this.stateObservable.value);
      }
      return apiResults;
    } catch (error) {
      console.error('could not find the adress');
      return [];
    }
  }

  async getRoute(from: GeocodeResult, to: GeocodeResult): Promise<RouteResult> {
    if (this.hasAlreadyExisted(from, to)) {
      var results = this.findExisting(from, to);
      return results[0].route;
    }
    var routeResult = await this.mapApiService.calculateRouteFromAtoB(from, to);
    this.routeDatabase.push(
      {
        from: from,
        to: to,
        route: routeResult
      }
    );
    return routeResult;
  }

  addNewItem(item: GeocodeResult) {
    if (this.checkItemExisting(item)) {
      return
    }
    var newItem = _.cloneDeep(item);
    if (newItem.color === undefined) {
      var newRandomcolor = GeneralHelper.getRandomRGB(0.5);
      newItem.color == newRandomcolor;
    }
    this.stateObservable.value.geoItems.push(newItem);
    this.stateObservable.next(this.stateObservable.value);
  }

  removeItem(item: GeocodeResult) {
    this.stateObservable.value.geoItems = this.stateObservable.value.geoItems.filter(value => !this.compareLocation(value, item));
    this.stateObservable.next(this.stateObservable.value);
  }

  interactionCallBack = async (type: InteractToItem, item: GeocodeResult) => {
    if (type != InteractToItem.Select) {
      return;
    }
    switch (this.stateObservable.value.selectedTool) {
      case ToolType.mesure:
        var groupToRender = this.mapApiService.measureGroup;
        groupToRender?.removeAll();
        this.stateObservable.value.geoCalculatingItems.push(item);
        if (this.stateObservable.value.geoCalculatingItems.length % 2 ==1) {
          this.stateObservable.value.geoCalculatingItems= [item];
          this.stateObservable.value.calculatedResult = undefined;
        }

        var calculatingItems = this.stateObservable.value.geoCalculatingItems;
        this.mapApiService.renderCirclesToMap(groupToRender, this.stateObservable.value.geoCalculatingItems, 100, { r: 17, g: 120, b: 100, a: 0.8 });
        if (this.stateObservable.value.geoCalculatingItems.length == 2) {
          var route = await this.getRoute(calculatingItems[0], calculatingItems[1]);
          this.mapApiService.renderRouteShapesToMap(groupToRender, [route]);
          var travelSummary = route.sections[0].travelSummary;
          this.stateObservable.value.calculatedResult = travelSummary;
        }
        
        this.stateObservable.next(this.stateObservable.value);
        this.toolsNavigationService.openMeasureTool();
        break;
      case ToolType.radius:
        var groupToRender = this.mapApiService.radiusGroup;
        this.mapApiService.renderCirclesToMap(groupToRender,
           [item], this.stateObservable.value.distance, { r: 17, g: 120, b: 100, a: 0.8 });
        this.toolsNavigationService.openRadiusTool();
        break;
      default:
        this.setSelectedItem(item);
        this.toolsNavigationService.openBottomSheet(item);
        break;
    }
  }

  checkItemExisting(item: GeocodeResult): boolean {
    return this.stateObservable.value.geoItems.some(value => this.compareLocation(value, item));
  }

  async mapToGeoItems(realstateData: RealstateData[]): Promise<GeocodeResult[]> {
    var dictionary = groupBy(realstateData, 'address');
    console.log(dictionary);

    var results: GeocodeResult[] = [];
    for (const [key, value] of Object.entries(dictionary)) {
      if (!key) {
        continue;
      }
      var geocodeResults = await this.getGeoCodeResult(key, true);
      if (geocodeResults.length == 0) {
        continue;
      }
      var geoItem: GeocodeResult = {
        id: geocodeResults[0].id,
        address: { label: geocodeResults[0].address.label },
        position: geocodeResults[0].position,
        type: 'Home',
        realstateData: value,
        color: GeneralHelper.getRandomRGB(1)
      }
      results.push(geoItem);
    }
    return results;
  }

  private findExisting(from: GeocodeResult, to: GeocodeResult): RoutePair[] {
    return this.routeDatabase.filter(routeData => {
      return this.compareLocation(routeData.from, from) && this.compareLocation(routeData.to, to)
    });
  }

  private hasAlreadyExisted(from: GeocodeResult, to: GeocodeResult) {
    return this.routeDatabase.some(routeData => {
      return this.compareLocation(routeData.from, from) && this.compareLocation(routeData.to, to)
    });
  }

  private compareLocation(A: GeocodeResult, B: GeocodeResult): boolean {
    return A.address.label === B.address.label;
  }
}

