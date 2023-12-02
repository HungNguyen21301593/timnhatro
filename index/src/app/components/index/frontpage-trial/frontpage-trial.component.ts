import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EmptyState } from 'src/app/interfaces/map-state';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { MapStateService } from 'src/app/services/map-state.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-frontpage-trial',
  templateUrl: './frontpage-trial.component.html',
  styleUrls: ['./frontpage-trial.component.css']
})
export class FrontpageTrialComponent implements OnInit {

  constructor(private mapStateService: MapStateService,
    private webApiService: WebApiService,
    private sanitizer: DomSanitizer,
    private router: Router) { }
  resultLink: null | SafeUrl = null;

  ngOnInit() {
  }

  async itemposted(realstateData: RealstateData[]) {
    if (realstateData.length == 0) {
      return;
    }
    var newState = new EmptyState();
    newState.geoItems = await this.mapStateService.mapToGeoItems(realstateData);

    this.mapStateService.stateObservable.next(newState);
    var result = await this.webApiService.createNewUserState(newState);
    this.resultLink = this.sanitizer.bypassSecurityTrustUrl(`main/${result.id}`);
  }
}
