import { Component, OnInit } from '@angular/core';
import { ToolState, ToolType } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-mesure-tool',
  templateUrl: './mesure-tool.component.html',
  styleUrls: ['./mesure-tool.component.scss']
})
export class MesureToolComponent implements OnInit {

  ToolType = ToolType;
  currentTool: ToolState | undefined;
  constructor(public mapStateService: MapStateService) { }

  ngOnInit() {
    this.currentTool = this.mapStateService.getToolByType(ToolType.mesure);
  }

  change(type: ToolType, status: boolean) {
  this.mapStateService.setToolStatus(type, status);
  }
}
