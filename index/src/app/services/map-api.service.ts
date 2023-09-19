import { Injectable } from '@angular/core';
import { GeocodeResult } from '../interfaces/geocode-result';
import { RouteResult, Section, TravelSummary } from '../interfaces/route-result';
import { InteractToItem } from '../interfaces/interact-to-item.enum';
import { Isoline, IsolineRessult } from '../interfaces/isoline-result';
import { data } from '@here/maps-api-for-javascript';
import { GeneralHelper } from './Util/general-helper';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  platform: H.service.Platform | undefined;
  private map?: H.Map;
  defaultLayers: any;
  public normalGroup?: H.map.Group;
  public measureGroup?: H.map.Group = new H.map.Group();
  ui?: H.ui.UI;

  constructor() {
    this.platform = new H.service.Platform({
      apikey: 'wQOFzJnltEfLDHulkvnkd26RgvFvmrDwGmr31xP1uhs'
    });
  }
  initMap(mapContainer: HTMLElement): H.Map {

    this.defaultLayers = this.platform?.createDefaultLayers({ lg: "vn" }) as any;
    this.map = new H.Map(mapContainer, this.defaultLayers.vector.normal.map, {
      center: { lat: 10.80814, lng: 106.70736 },
      zoom: 9,
      pixelRatio: window.devicePixelRatio || 1
    });

    this.normalGroup = new H.map.Group();
    window.addEventListener('resize', () => this.map?.getViewPort().resize());
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
    this.setStyle();
    return this.map;
  }

  setStyle() {
    // get the vector provider from the base layer
    var provider = this.map?.getBaseLayer()?.getProvider() as any;
    var style = new H.map.Style('/assets/map-styles/light.yaml');
    // set the style on the existing layer
    provider?.setStyle(style);
  }

  createVectorLayerMap(mapContainer: HTMLElement) {
    var engineType = H.Map.EngineType['HARP'];
    var style = new H.map.render.harp.Style('assets/map-styles/timnhatromap.json');
    var service = this.platform?.getOMVService();
    var vectorLayer = service?.createLayer(style, { engineType, lg: "vn" });
    if (!vectorLayer) {
      return;
    }
    this.map = new H.Map(mapContainer,
      vectorLayer,
      {
        engineType: engineType,
        center: { lat: 10.80814, lng: 106.70736 },//10.80814,106.70736
        zoom: 10,
        pixelRatio: window.devicePixelRatio || 1
      });
  }

  calculateRouteFromAtoB(origin: GeocodeResult, destimation: GeocodeResult): Promise<RouteResult> {
    if (!this.platform) {
      throw new Error("");
    }
    var router = this.platform.getRoutingService(undefined, 8),
      routeRequestParams = {
        routingMode: 'short',
        transportMode: 'car',
        origin: `${origin.position.lat},${origin.position.lng}`,
        destination: `${destimation.position.lat},${destimation.position.lng}`,
        return: 'polyline,travelSummary'
      };
    return new Promise((resolve, reject) => {
      router.calculateRoute(
        routeRequestParams,
        (result: any) => {
          var route = result.routes[0];
          resolve(route)
        },
        reject
      );
    })
  }

  geocode(address: string): Promise<GeocodeResult[]> {
    var geocoder = this.platform?.getSearchService(),
      geocodingParameters = {
        q: address
      };
    return new Promise((resolve, reject) => {
      geocoder?.geocode(
        geocodingParameters,
        (result: any) => {
          var locations = result.items;
          resolve(locations.slice(0, 5));
        },
        reject
      );
    })
  }

  calculateIsolineRoute(geocodeResult: GeocodeResult, distance: number): Promise<IsolineRessult> {
    var router = this.platform?.getRoutingService(undefined, 8),
      routeRequestParams = {
        'origin': `${geocodeResult.position.lat},${geocodeResult.position.lng}`,
        'range[type]': 'distance',
        'range[values]': distance,
        'transportMode': 'car',
        'routingMode': 'short',

      };
    return new Promise((resolve, reject) => {
      router?.calculateIsoline(
        routeRequestParams,
        (result: any) => {
          var route = result;
          resolve(route);
        },
        reject
      );
    })
  }

  

  renderRouteShapesToMap(group: H.map.Group | undefined,routes: RouteResult[]) {
    if (!this.map) {
      return;
    }
    this.clearAllBubble();
    var polylines: H.map.Polyline[] = [];
    routes.forEach((route: RouteResult) => {
      route.sections.forEach((section: Section) => {
        let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
        console.log(section);

        let polyline = new H.map.Polyline(linestring,
          {
            style: {
              lineWidth: 3,
              strokeColor: 'rgba(0, 128, 255, 0.7)'
            },
            data: {}
          });
        polylines.push(polyline);
        // this.renderRouteNoteMarker(linestring, section.travelSummary);
      });
      group?.addObjects(polylines);

      if (!group) {
        return;
      }
      this.map?.addObject(group);
    });
  }

  renderRouteNoteMarker(line: H.geo.LineString, travelSummary: TravelSummary) {
    var count = line.getPointCount();
    var point = line.extractPoint(Math.round(count / 2));
    this.openBubble(point, `${Math.round(travelSummary.length / 100) / 10} Km`);
  }

  openBubble(position: H.geo.Point, text: string) {
    var bubble = new H.ui.InfoBubble(
      position,
      // The FO property holds the province name.
      { content: text });
    this.ui?.addBubble(bubble);
    bubble.open();
  }

  clearAllBubble() {
    this.ui?.getBubbles().forEach(bu => this.ui?.removeBubble(bu));
    if (!this.map) {
      return;
    }
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
  }

  renderLocationsToMap(group: H.map.Group | undefined, geocodeResults: GeocodeResult[], interactionCallBack: (type: InteractToItem, item: GeocodeResult) => void) {
    if (!this.map) {
      return;
    }
    if (!group) {
      return;
    }
    group = new H.map.Group();
    // Add a marker for each location found
    for (var i = 0; i < geocodeResults.length; i += 1) {
      let location = geocodeResults[i];
      var marker = new H.map.Marker(location.position);

      marker.addEventListener('tap', function (evt: any) {
        interactionCallBack(InteractToItem.Select, location);
      }, false);
      if (location.type == 'Home') {
        marker.setIcon(new H.map.Icon('/assets/image/home.png'));
      } else {
        var id = location.id;
        marker.setIcon(new H.map.Icon(`/assets/image/${id}.png`));
      }

      group?.addObject(marker);
    }

    // Add the locations group to the map
    this.map?.addObject(group);
    this.map?.setCenter(group?.getBoundingBox()?.getCenter());
  }

  renderCirclesToMap(group: H.map.Group | undefined, geocodeResults: GeocodeResult[], distance: number = 1000) {
    if (!this.map) {
      return;
    }
    if (!group) {
      return;
    }
    geocodeResults.forEach(geocodeResult => {
      if (!geocodeResult.color) {
        geocodeResult.color = GeneralHelper.getRandomRGB();
      }
      var colorborder = _.cloneDeep(geocodeResult.color);
      colorborder.a = 0.8;
      var colorFill = _.cloneDeep(geocodeResult.color);
      colorFill.a = 0.1;
      var styleOption: H.map.SpatialStyle.Options = {
        lineWidth: 4,
        strokeColor: GeneralHelper.toString(colorborder),
        fillColor: GeneralHelper.toString(colorFill)
      }
      var style = new H.map.SpatialStyle(styleOption);
      group?.addObject(
        new H.map.Circle(
          { lat: geocodeResult.position.lat, lng: geocodeResult.position.lng },
          distance,
          {
            data: {},
            style: style
          }
        )
      )
    });
    if (!group) {
      return;
    }
    this.map?.addObject(group);
  }

  zoomToLocations(locations: GeocodeResult[], resolution = 12) {
    if (!this.map) {
      return;
    }
    var dummyGroup = new H.map.Group();
    for (var i = 0; i < locations.length; i += 1) {
      let location = locations[i];
      var marker = new H.map.Marker(location.position);
      dummyGroup.addObject(marker);
    }
    this.map?.getViewModel().setLookAtData({
      bounds: dummyGroup.getBoundingBox(),
      zoom: resolution,
    });
  }

  onError(error: unknown) {
    alert('Can\'t reach the remote server');
  }
}
