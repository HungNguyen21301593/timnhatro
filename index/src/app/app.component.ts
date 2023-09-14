import { Component, OnInit } from '@angular/core';
import { SettingResult } from './interfaces/setting-result';
import { MapStateService } from './services/map-state.service';
import { Subscription } from 'rxjs';
import { GeocodeResult } from './interfaces/geocode-result';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from './services/web-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timnhatro';
  constructor(private router: ActivatedRoute, private mapStateService: MapStateService, private webApiService: WebApiService) {
  }
  susciption!: Subscription;

  async ngOnInit(): Promise<void> {
    localStorage.setItem('phone', '0918868008');
    var phone = localStorage.getItem('phone');
    if (!phone) {
      // should show dialog
      return;
    }
    var state = await this.mapStateService.reloadStateFromUrlParams(phone);
    if (state !== null) {
      return;
    }
    state = await this.webApiService.createNewUserStateByPhone(phone, {
      agent: {
        phone: phone,
        name: "",
        image: "",
        description: ""
      },
      geoItems: [],
      geoRoutePairs: []
    });
    this.mapStateService.stateObservable.next(state);
  }
  ngOnDestroy(): void {
  }
}
