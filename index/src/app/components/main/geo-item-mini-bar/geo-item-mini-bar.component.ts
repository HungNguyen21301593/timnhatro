import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { ToolType } from 'src/app/interfaces/map-state';
import { MapApiService } from 'src/app/services/map-api.service';
import { MapStateService } from 'src/app/services/map-state.service';
import { ToolsNavigationService } from 'src/app/services/tools-navigation.service';
import { MeasureToolComponent } from '../measure-tool/measure-tool.component';
import { InteractToItem } from 'src/app/interfaces/interact-to-item.enum';

@Component({
  selector: 'ngx-geo-item-mini-bar',
  templateUrl: './geo-item-mini-bar.component.html',
  styleUrls: ['./geo-item-mini-bar.component.scss']
})
export class GeoItemMiniBarComponent implements OnInit {

  @Input()
  item!: GeocodeResult;

  constructor(
    private bottomSheetRef: MatBottomSheetRef,
    private bottomSheet: MatBottomSheet,
    private mapStateService: MapStateService,
    private mapApiService: MapApiService,
    private toolsNavigationService: ToolsNavigationService) {
   }

  ngOnInit() {
  }

  openDetailsDialog()
  {
    this.bottomSheetRef.dismiss();
    var state = this.mapStateService.stateObservable.value;
    if (!state.selectedItem || !state.agent) {
      return;
    }
    var ref =  this.toolsNavigationService.openItemDialog(state.selectedItem, state.agent);
    ref?.afterClosed().subscribe(()=>{
      if (!state.selectedItem) {
        return;
      }
      this.toolsNavigationService.openBottomSheet(state.selectedItem)
    })
  }

  target() {
    if (!this.item) {
      return
    }
    this.mapApiService.zoomToLocations([this.item], 15);
  }

  direction() {
    if (!this.item.address) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.item.address.label}`, '_blank');
  }

  enableMeasureTool()
  {
    this.mapStateService.setToolStatus(ToolType.mesure);
    this.toolsNavigationService.openMeasureTool();
  }

  enableRadiusTool()
  {
    this.mapStateService.setToolStatus(ToolType.radius);
    this.mapStateService.setRadius(1000);
    this.toolsNavigationService.openRadiusTool();
  }

  close()
  {
    this.bottomSheet.dismiss();
    this.mapStateService.setToolStatus(undefined);
  }
}
