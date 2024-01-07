import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ToolType } from 'src/app/interfaces/map-state';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-main-maptools',
  templateUrl: './main-maptools.component.html',
  styleUrls: ['./main-maptools.component.css']
})
export class MainMaptoolsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<MainMaptoolsComponent>,
    public mapStateService: MapStateService) { }

  ngOnInit() {
  }

  change(type: ToolType, status: boolean) {
    this.mapStateService.setToolStatus(type, status);
  }

  closeTools() {
    this._bottomSheetRef.dismiss();
  }
}
