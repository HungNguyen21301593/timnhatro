import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.snackBar.open("Trải nghiệm tốt hơn bằng cách mở trong trình duyệt!", "", { duration: 2000 });
  }
}
