import { Injectable } from '@angular/core';
import { RoutePair } from '../interfaces/pair-route';
import { RouteResult } from '../interfaces/route-result';
import { GeocodeResult } from '../interfaces/geocode-result';
import { MapApiService } from './map-api.service';
import { InteractToItem } from '../interfaces/interact-to-item.enum';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { MapState } from '../interfaces/map-state';
import { AgentProfile } from '../interfaces/agent-profile';
import { Params } from '@angular/router';
import { Dictionary } from 'lodash';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class MapStateService {
  private routeDatabase: RoutePair[] = [];
  private geoCodeDatabase: Dictionary<GeocodeResult[]> = {};
  public stateObservable: BehaviorSubject<MapState> = new BehaviorSubject(
    {
      geoItems: [] as GeocodeResult[],
      geoRoutePairs: [] as RoutePair[],
      agent: {} as AgentProfile,
    }
  )

  public itemSelectedObservable: ReplaySubject<GeocodeResult | null> = new ReplaySubject(undefined);

  constructor(private mapApiService: MapApiService, private webApiService: WebApiService) {
    this.stateObservable.subscribe(() => {
      this.onMapStateChanges();
    })
  }

  async reloadStateFromUrlParams(phone: string): Promise<MapState | null> {
    var state = await this.webApiService.getUserStateByPhone(phone);
    document.title = `Thông tin nhà trọ của ${state.agent.name}, liên lạc: ${state.agent.phone}`;
    if (!state) {
      return null;
    }
    this.stateObservable.next(state);
    return state;
  }

  onMapStateChanges() {
    this.mapApiService.renderLocationsToMap(this.stateObservable.value.geoItems, this.interactionCallBack);
    this.mapApiService.zoomToLocations(this.stateObservable.value.geoItems);
    this.process();
  }

  checkItemExisting(item: GeocodeResult): boolean {
    return this.stateObservable.value.geoItems.some(value => value.address.label == item.address.label);
  }

  setAgent(agent: AgentProfile) {
    this.stateObservable.value.agent = agent;
    this.stateObservable.next(this.stateObservable.value);
  }

  async getGeoCodeResult(address: string, dosave: boolean): Promise<GeocodeResult[]> {
    if (this.geoCodeDatabase[address]) {
      return this.geoCodeDatabase[address];
    }
    try {
      var apiResults = await this.mapApiService.geocode(address);
      if (dosave) {
        this.geoCodeDatabase[address] = apiResults;
      }
      return apiResults;
    } catch (error) {
      throw new Error('could not find the address');
    }
  }

  async getRoute(from: GeocodeResult, to: GeocodeResult): Promise<RouteResult> {
    if (this.hasAlreadyExisted(from, to)) {
      var results = this.findExisting(from, to);
      return results[0].route;
    }
    var routeResult = await this.calculate(from, to);
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
    this.stateObservable.value.geoItems.push(item);
    this.stateObservable.next(this.stateObservable.value);
  }

  removeItem(item: GeocodeResult) {
    this.stateObservable.value.geoItems = this.stateObservable.value.geoItems.filter(value => value.address.label !== item.address.label);
    this.stateObservable.next(this.stateObservable.value);
  }

  interactionCallBack = (type: InteractToItem, item: GeocodeResult) => {
    switch (type) {
      case InteractToItem.Open:
        this.itemSelectedObservable.next(item);
        break;
      case InteractToItem.Remove:
        this.removeItem(item);
        console.log("open item");
        break;
      default:
        break;
    }
  }

  async process() {
    var offices = this.stateObservable.value.geoItems.filter(value => value.type == 'Office');
    var homes = this.stateObservable.value.geoItems.filter(value => value.type == 'Home');
    var pairs: { from: GeocodeResult, to: GeocodeResult }[] = [];
    offices.forEach(async office => {
      homes.forEach(async home => {
        pairs.push({ from: office, to: home });
      })
    })

    var routes: RouteResult[] = [];
    for (const pair of pairs) {
      var route = await this.getRoute(pair.from, pair.to);
      routes.push(route);
    }
    this.mapApiService.renderRouteShapesToMap(routes);
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

  private async calculate(A: GeocodeResult, B: GeocodeResult): Promise<RouteResult> {
    var from = `${A.position.lat},${A.position.lng}`;
    var to = `${B.position.lat},${B.position.lng}`;
    var result = await this.mapApiService.calculateRouteFromAtoB(from, to);
    return result;
  }
}

