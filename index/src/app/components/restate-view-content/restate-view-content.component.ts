import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-restate-view-content',
  templateUrl: './restate-view-content.component.html',
  styleUrls: ['./restate-view-content.component.css']
})
export class RestateViewContentComponent implements OnInit, OnDestroy {
  @Input()
  public item: GeocodeResult | undefined = undefined;

  constructor(private mapStateService: MapStateService) { }
  ngOnDestroy(): void {
  }

  ngOnInit() {
  }
}
