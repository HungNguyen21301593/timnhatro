import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapApiService } from 'src/app/services/map-api.service';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-geo-added-home',
  templateUrl: './geo-added-home.component.html',
  styleUrls: ['./geo-added-home.component.css']
})
export class GeoAddedHomeComponent implements OnInit {
  @Input()
  item!: GeocodeResult;

  @Input()
  expanded = false;

  @ViewChild(MatAccordion) accordion: MatAccordion|undefined;

  constructor(private mapApiService: MapApiService) { }

  ngOnInit() {
  }

  target() {
    if (!this.item) {
      return
    }
    this.accordion?.closeAll();
    this.mapApiService.zoomToLocations([this.item], 16);
  }

  back()
  {
    this.accordion?.closeAll();
  }
}
