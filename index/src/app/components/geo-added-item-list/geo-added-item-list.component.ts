import { Component, Input, OnInit } from '@angular/core';
import { MapApiService } from '../../services/map-api.service';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-geo-added-item-list',
  templateUrl: './geo-added-item-list.component.html',
  styleUrls: ['./geo-added-item-list.component.scss']
})
export class GeoAddedItemListComponent implements OnInit {
  @Input()
  public types: 'Home' | 'Office' | undefined;

  constructor(private mapApiService: MapApiService, public mapStateService: MapStateService) { }

  ngOnInit() {
  }

  getList(): GeocodeResult[] {
    return this.mapStateService.stateObservable.value.
      geoItems?.filter(a => this.types?.includes(a.type ?? ''));
  }

  diplayText(result: GeocodeResult)
  {
    return `Địa chỉ ${result.id}: ${result?.address?.label?.split(',')![0]}`;
  }

  deleteItem(result: GeocodeResult) {
    this.mapStateService.removeItem(result);
  }

  target(item: GeocodeResult | undefined) {
    if (!item) {
      return
    }
    this.mapApiService.zoomToLocations([item], 16);
  }
}
