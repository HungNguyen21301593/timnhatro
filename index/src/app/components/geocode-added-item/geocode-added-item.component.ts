import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapApiService } from 'src/app/services/map-api.service';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-geocode-added-item',
  templateUrl: './geocode-added-item.component.html',
  styleUrls: ['./geocode-added-item.component.css']
})
export class GeocodeAddedItemComponent implements OnInit {
  @Input()
  item: GeocodeResult | undefined;
  @Output()
  deletedItem = new EventEmitter<GeocodeResult>();

  constructor(private mapApiService: MapApiService, private mapStateService: MapStateService) { }

  ngOnInit() {
  }
  
  delete(item: GeocodeResult | undefined) {
    if (!item) {
      return
    }
    this.mapStateService.removeItem(item);
    this.deletedItem.emit(item);
  }

  zoomIn(item: GeocodeResult | undefined) {
    if (!item) {
      return
    }
    this.mapApiService.zoomToLocations([item], 16);
  }
}
