import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-realstate-side-view',
  templateUrl: './realstate-side-view.component.html',
  styleUrls: ['./realstate-side-view.component.css']
})
export class RealstateSideViewComponent implements OnInit {
  @ViewChild('drawerItem') drawerItem?: MatDrawer;

  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;

  @ViewChild('drawerAgent') drawerAgent?: MatDrawer;

  subscription: any;
  selectedItem?: GeocodeResult;

  constructor(private mapStateService: MapStateService) { }

  ngOnInit() {
    this.subscription = this.mapStateService.itemSelectedObservable.subscribe((item: GeocodeResult | null) => {
      if (item?.type != 'Home') {
        return;
      }
      if (item === null || !this.drawerItem) {
        this.backToDefault();
        return;
      }
      this.closeOthers(this.drawerItem);
    });
  }

  drawerItemClosed() {
    this.backToDefault();
  }

  closeOthers(matdrawer: MatDrawer)
  {
    this.drawerAutoSearch?.close();
    this.drawerHomeAddedItems?.close();
    this.drawerAgent?.close();
    this.drawerItem?.close();

    matdrawer.open();
  }

  backToDefault() {
    this.drawerAutoSearch?.open();
    this.drawerHomeAddedItems?.open();
    this.drawerAgent?.close();
    this.drawerItem?.close();
  }
}
