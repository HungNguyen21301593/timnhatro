import { Component, OnInit } from '@angular/core';
import { ToolType } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-mesure-tool',
  templateUrl: './mesure-tool.component.html',
  styleUrls: ['./mesure-tool.component.scss']
})
export class MesureToolComponent implements OnInit {

  ToolType = ToolType;
  constructor(public mapStateService: MapStateService) { }

  ngOnInit() {
  }

  change(type: ToolType, status: Boolean) {
   this.mapStateService.setToolStatus(type, status);
  }
}
