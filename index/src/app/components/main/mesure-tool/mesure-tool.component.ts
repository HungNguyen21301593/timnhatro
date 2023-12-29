import { Component, OnInit } from '@angular/core';
import { ToolMode } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-mesure-tool',
  templateUrl: './mesure-tool.component.html',
  styleUrls: ['./mesure-tool.component.scss']
})
export class MesureToolComponent implements OnInit {

  ToolMode = ToolMode;
  constructor(public mapStateService: MapStateService) { }

  ngOnInit() {
  }

  change(type: ToolMode, status: Boolean) {
    if (type == ToolMode.mesure) {
      this.mapStateService.stateObservable.value.toolMode = type
      this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
    }
    else{
      this.mapStateService.stateObservable.value.toolMode = ToolMode.normal;
      this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
    }
  }
}
