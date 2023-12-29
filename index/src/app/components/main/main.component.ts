import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MapStateService } from 'src/app/services/map-state.service';
import { MainMaptoolsComponent } from './main-maptools/main-maptools.component';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;

  toolsOpened = false;

  constructor(
    private mapstateService: MapStateService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.snackBar.open("Trải nghiệm tốt hơn bằng cách mở trong trình duyệt!", "", { duration: 2000 });
  }

  openTools()
  {
    var ref = this._bottomSheet.open(MainMaptoolsComponent, { hasBackdrop: false});
    ref.afterOpened().subscribe(()=>{
      this.toolsOpened = true;
    })
    ref.afterDismissed().subscribe(()=>{
      this.toolsOpened = false;
    })
  }
}
