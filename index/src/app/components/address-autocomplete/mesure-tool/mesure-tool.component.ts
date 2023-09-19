import { Component, OnInit } from '@angular/core';
import { ToolMode } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-mesure-tool',
  templateUrl: './mesure-tool.component.html',
  styleUrls: ['./mesure-tool.component.scss']
})
export class MesureToolComponent implements OnInit {

  type: ToolMode = ToolMode.normal;
  constructor(public mapStateService: MapStateService) { }

  ngOnInit() {
  }
  change(value: ToolMode) {
    if (value == ToolMode.normal) {
      this.type = ToolMode.mesure
    }
    if (value == ToolMode.mesure) {
      this.type  = ToolMode.normal
    }
    this.mapStateService.stateObservable.value.toolMode = this.type;
    this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
  }
}
