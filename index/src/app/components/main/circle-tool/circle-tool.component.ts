import { Component, OnInit } from '@angular/core';
import { MapApiService } from 'src/app/services/map-api.service';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-circle-tool',
  templateUrl: './circle-tool.component.html',
  styleUrls: ['./circle-tool.component.scss']
})
export class CircleToolComponent implements OnInit {

  constructor(public mapStateService: MapStateService) { }
  selectedRadius:string = '';
  ngOnInit() {
    this.selectedRadius = this.mapStateService.stateObservable.value.distance.toString();
  }
  distanceChanged(value:string)
  {
    this.mapStateService.stateObservable.value.distance = Number(value);
    this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
  }
}
