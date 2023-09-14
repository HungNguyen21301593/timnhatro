import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;

  public item!: GeocodeResult;
  subs: Subscription;
  constructor(private mapstateService: MapStateService, private snackBar: MatSnackBar) {
    this.subs = this.mapstateService.itemSelectedObservable.subscribe(item => {
      if (!item) {
        return;
      }
      this.item = item;
      this.drawerHomeAddedItems?.open();
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.snackBar.open("Trải nghiệm tốt hơn bằng cách mở trong trình duyệt!", "OK", { duration: 2000 });
  }
}
