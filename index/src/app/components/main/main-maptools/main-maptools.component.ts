import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-main-maptools',
  templateUrl: './main-maptools.component.html',
  styleUrls: ['./main-maptools.component.css']
})
export class MainMaptoolsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<MainMaptoolsComponent>) { }

  ngOnInit() {
  }

  closeTools()
  {
    this._bottomSheetRef.dismiss();
  }
}
