import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-geo-added-home-list',
  templateUrl: './geo-added-home-list.component.html',
  styleUrls: ['./geo-added-home-list.component.css']
})
export class GeoAddedHomeListComponent implements OnInit, OnDestroy {
  public items!: GeocodeResult[];
  public selectedItemIndex = -1;
  subscripbe: Subscription | undefined;

  constructor(private mapstateService: MapStateService) { }
  ngOnDestroy(): void {
    this.subscripbe?.unsubscribe();
  }

  ngOnInit() {
    this.subscripbe = this.mapstateService.stateObservable.subscribe(state => {
      this.items = state.geoItems;
    })
  }

  selectedItem(index:number)
  {
    this.selectedItemIndex = index;
  }
}
