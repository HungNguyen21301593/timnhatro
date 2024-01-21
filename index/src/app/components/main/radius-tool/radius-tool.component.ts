import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-radius-tool',
  templateUrl: './radius-tool.component.html',
  styleUrls: ['./radius-tool.component.css']
})
export class RadiusToolComponent implements OnInit {

  initDistance: number = 1000;
  constructor(private mapStateService: MapStateService,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.initDistance = this.mapStateService.stateObservable.value.distance;
  }

  setDistance(distance:number)
  {
    this.mapStateService.setRadius(distance)
  }

  close()
  {
    this.bottomSheet.dismiss();
    this.mapStateService.setToolStatus(undefined);
  }
}
