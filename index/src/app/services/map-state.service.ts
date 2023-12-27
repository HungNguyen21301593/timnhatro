import { Injectable } from '@angular/core';
import { RoutePair } from '../interfaces/pair-route';
import { RouteResult } from '../interfaces/route-result';
import { GeocodeResult } from '../interfaces/geocode-result';
import { MapApiService } from './map-api.service';
import { InteractToItem } from '../interfaces/interact-to-item.enum';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { MapState, ToolMode } from '../interfaces/map-state';
import { AgentProfile } from '../interfaces/agent-profile';
import { Dictionary } from 'lodash';
import { WebApiService } from './web-api.service';
import { Meta } from '@angular/platform-browser';
import { GeneralHelper } from './Util/general-helper';
import _ from 'lodash';
import { GeoAddedHomeComponent } from '../components/main/geo-added-home/geo-added-home.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-ts';
import { RealstateData } from '../interfaces/realstate-item';
import { groupBy } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class MapStateService {
  private routeDatabase: RoutePair[] = [];
  private initState: MapState = {
    geoItems: [] as GeocodeResult[],
    geoCalculatingItems: [] as GeocodeResult[],
    geoRoutePairs: [] as RoutePair[],
    distance: 1000,
    toolMode: ToolMode.normal,
    agent: {} as AgentProfile,
    geoCodeDatabase:{}
  };
  public stateObservable: BehaviorSubject<MapState> = new BehaviorSubject(this.initState);

  public itemSelectedObservable: ReplaySubject<GeocodeResult | null> = new ReplaySubject(undefined);

  constructor(private mapApiService: MapApiService, private webApiService: WebApiService, private meta: Meta, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.stateObservable.subscribe(() => {
      this.rerenderMap();
    })
  }

  rerenderMap() {
    switch (this.stateObservable.value.toolMode) {
      case ToolMode.normal:
        
        this.onRerenderMapNormal();
        break;
      case ToolMode.mesure:
        this.onRerenderMapNormal();
        this.onRerenderMesureTool();
        break;
      default:
        break;
    }
  }

  onRerenderMapNormal() {
    this.mapApiService.measureGroup?.setVisibility(false);
    this.mapApiService.normalGroup?.setVisibility(true);
    this.mapApiService.clearAllBubble();

    var groupToRender = this.mapApiService.normalGroup;
    groupToRender?.removeAll();
    groupToRender?.setVisibility(true);
    this.mapApiService.renderLocationsToMap(groupToRender, this.stateObservable.value.geoItems,
      (type: InteractToItem, item: GeocodeResult) => {
        this.openItemDialog(item);
      });
    var officeLists = this.stateObservable.value.geoItems.filter(item => item.type == 'Office');
    this.mapApiService.renderCirclesToMap(groupToRender, officeLists, this.stateObservable.value.distance);
  }

  onRerenderMesureTool() {
    this.mapApiService.measureGroup?.setVisibility(true);
    this.mapApiService.normalGroup?.setVisibility(true);
    var groupToRender = this.mapApiService.measureGroup;
    groupToRender?.removeAll();
 
    this.mapApiService.renderLocationsToMap(groupToRender, this.stateObservable.value.geoItems, async (type: InteractToItem, item: GeocodeResult) => {
      if (this.stateObservable.value.geoCalculatingItems.some(i => this.compareLocation(i, item))) {
        return;
      }
      this.stateObservable.value.geoCalculatingItems.push(item);
      var calculatingItems = this.stateObservable.value.geoCalculatingItems;
      if (calculatingItems.length == 1) {
        groupToRender?.removeAll();
      }
      this.mapApiService.renderCirclesToMap(groupToRender, calculatingItems, 100, { r: 17, g: 120, b: 100, a: 0.8 });
      if (calculatingItems.length == 2) {
        var route = await this.getRoute(calculatingItems[0], calculatingItems[1]);
        this.mapApiService.renderRouteShapesToMap(groupToRender, [route]);
        var route = await this.getRoute(calculatingItems[0], calculatingItems[1]);
        var travelSummary = route.sections[0].travelSummary;
        this.snackBar.open(`${Math.round(travelSummary.length / 100) / 10} Km, ${Math.round(travelSummary.duration/60)} Phút`, "", { duration: 3000 })
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
    this.updateMetaAndTitle(state.agent);
    this.stateObservable.next(state);
    return state;
  }

  private updateMetaAndTitle(agent: AgentProfile) {
    document.title = `Thông tin nhà trọ của ${agent.name}`;
    this.meta.addTag({ property: "og:title", content: `Thông tin nhà trọ của ${agent.name}` })
    this.meta.addTag({ property: "og:description", content: agent.description ?? "" })
    this.meta.addTag({ property: "og:image", content: `${agent.image}` })
    this.meta.addTag({ property: "og:url", content: `	http://146.190.84.59:8000/main/${agent.phone}` })
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

  interactionCallBack = (type: InteractToItem, item: GeocodeResult) => {
    switch (type) {
      case InteractToItem.Select:
        this.openItemDialog(item);
        break;
      default:
        break;
    }
  }

  openItemDialog(item: GeocodeResult) {
    if (!item || item.type === 'Office') {
      return;
    }
    let dialogRef = this.dialog.open(GeoAddedHomeComponent, {
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      height:'70vh',
    });
    let instance = dialogRef.componentInstance;
    instance.item = item;
    instance.agent = this.stateObservable.value.agent;
    instance.expanded = true;
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

