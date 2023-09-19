import { AfterContentInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { GeoAddedHomeComponent } from '../geo-added-home/geo-added-home.component';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;

  subs: Subscription;
  constructor(
    private mapstateService: MapStateService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.subs = this.mapstateService.itemSelectedObservable.subscribe(item => {
      // if (!item || item.type === 'Office') {
      //   return;
      // }
      
      // this.item = item;
      // let dialogRef = this.dialog.open(GeoAddedHomeComponent,{
      //   enterAnimationDuration: '200ms',
      //   exitAnimationDuration: '200ms',
      // });
      // let instance = dialogRef.componentInstance;
      // instance.item = item;
      // instance.expanded = true;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.snackBar.open("Trải nghiệm tốt hơn bằng cách mở trong trình duyệt!", "", { duration: 2000 });
  }
}
