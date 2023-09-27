import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import { MapApiService } from '../../../services/map-api.service';
import { SettingResult } from 'src/app/interfaces/setting-result';
import { ActivatedRoute } from '@angular/router';
import { MapStateService } from 'src/app/services/map-state.service';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input()
  setting: SettingResult | undefined;

  private map?: H.Map;
  @ViewChild('map') mapDiv?: ElementRef;

  constructor(private mapApiService: MapApiService,
    private mapStateService: MapStateService,
    private router: ActivatedRoute,
    public dialog: MatDialog
  ) {

  }

  selectedItem?: GeocodeResult;
  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    if (!this.map && this.mapDiv) {
      this.map = this.mapApiService.initMap(this.mapDiv.nativeElement);
      this.router.params.subscribe(async param => {
        if (!param['stateId']) {
          this.dialog.open(LoginDialogComponent, {
            enterAnimationDuration: '200ms',
            exitAnimationDuration: '200ms',
          });
          return;
        }
        await this.mapStateService.reloadState(param['stateId']);
      })
    }
  }
}
