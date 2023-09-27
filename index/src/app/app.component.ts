import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingResult } from './interfaces/setting-result';
import { MapStateService } from './services/map-state.service';
import { Subscription } from 'rxjs';
import { GeocodeResult } from './interfaces/geocode-result';
import { MapApiService } from './services/map-api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'timnhatro';

  constructor(
    private mapStateService: MapStateService,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) {

    this.router.params.subscribe(async param => {
      if (!param['phone']) {
        return;
      }
      await this.mapStateService.reloadState(param['stateId']);
    })
  }
  susciption!: Subscription;

  async ngOnInit(): Promise<void> {
  }
  ngOnDestroy(): void {
    this.susciption.unsubscribe();
  }
}
