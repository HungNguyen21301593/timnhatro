import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'timnhatro';

  constructor(
    private mapStateService: MapStateService,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) {

  }
  susciption!: Subscription;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    this.router.params.subscribe(async param => {
      if (!param['phone']) {
        return;
      }
      await this.mapStateService.reloadStateFromUrlParams(param['phone']);
    })
  }
}
