import { Injectable } from '@angular/core';
import { GeocodeResult } from '../interfaces/geocode-result';
import { RouteResult, Section, TravelSummary } from '../interfaces/route-result';
import { InteractToItem } from '../interfaces/interact-to-item.enum';
import { Isoline, IsolineRessult } from '../interfaces/isoline-result';
import { data } from '@here/maps-api-for-javascript';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  platform: H.service.Platform | undefined;
  private map?: H.Map;
  locationsGroup?: H.map.Group;
  routesGroup?: H.map.Group;
  notesGroup?: H.map.Group;
  isolineRoutesGroup?: H.map.Group;
  ui?: H.ui.UI;

  constructor() {
    this.platform = new H.service.Platform({
      apikey: 'wQOFzJnltEfLDHulkvnkd26RgvFvmrDwGmr31xP1uhs'
    });
  }
  initMap(mapContainer: HTMLElement): H.Map {

    var defaultLayers = this.platform?.createDefaultLayers({ lg: "vn" }) as any;
    console.log(defaultLayers);
    this.map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
      center: { lat: 10.80814, lng: 106.70736 },
      zoom: 9,
      pixelRatio: window.devicePixelRatio || 1
    });
    this.locationsGroup = new H.map.Group();
    this.routesGroup = new H.map.Group();
    this.notesGroup = new H.map.Group();
    this.isolineRoutesGroup = new H.map.Group();
    window.addEventListener('resize', () => this.map?.getViewPort().resize());
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
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

  calculateRouteFromAtoB(origin: string, destimation: string): Promise<RouteResult> {
    if (!this.platform) {
      throw new Error("");
    }
    var router = this.platform.getRoutingService(undefined, 8),
      routeRequestParams = {
        routingMode: 'short',
        transportMode: 'car',
        origin: origin, // Brandenburg Gate
        destination: destimation, // Friedrichstraße Railway Station
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
  
  removeAllIsolateRoutes()
  {
    if (!this.map) {
      return;
    }
    this.isolineRoutesGroup?.removeAll()
  }

  renderIsolineToMap(isolineRessult: IsolineRessult, color: string) {
    if (!this.map) {
      return;
    }
    isolineRessult.isolines[0].polygons.forEach((section) => {
      // decode LineString from the flexible polyline
      let linestring = H.geo.LineString.fromFlexiblePolyline(section.outer);
  
      // Create a polygon to display the area
      let polygon = new H.map.Polygon(linestring, {
        style: {
          lineWidth: 4,
          strokeColor: color,
          fillColor: 'rgba(100, 149, 237 , 0.3)'
        },
        data:{}
      });
  
      // Add the polygon to the map
      this.isolineRoutesGroup?.addObject(polygon);
      if (!this.isolineRoutesGroup) {
        return;
      }
      this.map?.addObject(this.isolineRoutesGroup)
      // And zoom to its bounding rectangle
      var point = polygon?.getBoundingBox()?.getCenter();
      if (!point) {
        return;
      }
      this.map?.setCenter(point);
    });
  }

  renderRouteShapesToMap(routes: RouteResult[]) {
    if (!this.map) {
      return;
    }
    this.clearAllBubble();
    this.routesGroup?.removeAll();
    var polylines: H.map.Polyline[] = [];
    routes.forEach((route: RouteResult) => {
      route.sections.forEach((section: Section) => {
        // decode LineString from the flexible polyline
        let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
        console.log(section);

        // Create a polyline to display the route:
        let polyline = new H.map.Polyline(linestring,
          {
            style: {
              lineWidth: 3,
              strokeColor: 'rgba(0, 128, 255, 0.7)'
            },
            data: {}
          });
        polylines.push(polyline);
        this.renderRouteNoteMarker(linestring, section.travelSummary);
      });
      this.routesGroup?.addObjects(polylines);

      if (!this.routesGroup) {
        return;
      }
      this.map?.addObject(this.routesGroup);
    });
  }

  renderRouteNoteMarker(line: H.geo.LineString, travelSummary: TravelSummary) {
    var count = line.getPointCount();
    var point = line.extractPoint(count-1);
    this.openBubble(point, `${Math.round(travelSummary.length / 100)/10} Km <br> ${Math.round(travelSummary.duration / 60)} Phút`);
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
  }

  renderLocationsToMap(locations: GeocodeResult[], interactionCallBack: (type: InteractToItem, item: GeocodeResult) => void) {
    if (!this.map) {
      return;
    }
    if (!this.locationsGroup) {
      this.locationsGroup = new H.map.Group();
    }
    this.locationsGroup.removeAll();
    // Add a marker for each location found
    for (var i = 0; i < locations.length; i += 1) {
      let location = locations[i];
      var marker = new H.map.Marker(location.position);

      marker.addEventListener('tap', function (evt:any) {
        interactionCallBack(InteractToItem.Open, location);
      }, false);
      location.type == 'Home' ? marker.setIcon(new H.map.Icon('/assets/image/home.png')) : marker.setIcon(new H.map.Icon('/assets/image/office.png'));

      this.locationsGroup?.addObject(marker);
    }

    // Add the locations group to the map
    this.map?.addObject(this.locationsGroup);
    this.map?.setCenter(this.locationsGroup?.getBoundingBox()?.getCenter());
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
