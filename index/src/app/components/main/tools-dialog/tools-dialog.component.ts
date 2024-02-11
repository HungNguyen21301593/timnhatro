import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToolState, ToolType } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';
import { ToolsNavigationService } from 'src/app/services/tools-navigation.service';

@Component({
  selector: 'app-tools-dialog',
  templateUrl: './tools-dialog.component.html',
  styleUrls: ['./tools-dialog.component.css']
})
export class ToolsDialogComponent implements OnInit {

  tools: ToolState[] = [];
  constructor(private mapStateService: MapStateService, 
    private toolsNavigationService: ToolsNavigationService,
    private dialog: MatDialogRef<ToolsDialogComponent>
    ) { }

  ngOnInit() {
    this.tools = this.mapStateService.stateObservable.value.toolState
  }
  enableTool(type: ToolType) {
    switch (type) {
      case ToolType.mesure:
        this.toolsNavigationService.openMeasureTool();
        break;
      case ToolType.radius:
        this.toolsNavigationService.openRadiusTool();
        break;
      default:
        break;
    }
    this.dialog.close();
  }
}
