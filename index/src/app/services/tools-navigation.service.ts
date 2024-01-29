import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GeocodeResult } from '../interfaces/geocode-result';
import { GeoAddedHomeComponent } from '../components/main/geo-added-home/geo-added-home.component';
import { GeoItemMiniBarComponent } from '../components/main/geo-item-mini-bar/geo-item-mini-bar.component';
import { AgentProfile } from '../interfaces/agent-profile';
import { MeasureToolComponent } from '../components/main/measure-tool/measure-tool.component';
import { MapState } from '../interfaces/map-state';
import { RadiusToolComponent } from '../components/main/radius-tool/radius-tool.component';

@Injectable({
  providedIn: 'root'
})
export class ToolsNavigationService {

  constructor(public dialog: MatDialog,
    private bottomSheet: MatBottomSheet) { }

  openItemDialog(item: GeocodeResult, agent: AgentProfile) {
    if (!item || item.type === 'Office') {
      return;
    }
    let dialogRef = this.dialog.open(GeoAddedHomeComponent, {
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      height: '60vh',
      width: '100vw',
    });
    let instance = dialogRef.componentInstance;
    instance.item = item;
    instance.agent = agent
    return dialogRef;
  }

  openBottomSheet(item: GeocodeResult)
  {
    var ref = this.bottomSheet.open(GeoItemMiniBarComponent,
      {
        hasBackdrop: false
      });
    if (!item) {
      return;
    }
    ref.instance.item = item;
  }

  openMeasureTool()
  {
    if (this.bottomSheet.
      _openedBottomSheetRef?.componentRef?.componentType 
      == MeasureToolComponent) {
      return;
    }
    this.bottomSheet.open(MeasureToolComponent, { hasBackdrop: false });
  }

  openRadiusTool()
  {
    if (this.bottomSheet.
      _openedBottomSheetRef?.componentRef?.componentType 
      == RadiusToolComponent) {
      return;
    }
    this.bottomSheet.open(RadiusToolComponent, { hasBackdrop: false });
  }

  closeAllBottomSheet()
  {
    if (this.bottomSheet.
      _openedBottomSheetRef?.componentRef?.componentType 
      == MeasureToolComponent) {
      return;
    }
    this.bottomSheet.dismiss();
  }
}
