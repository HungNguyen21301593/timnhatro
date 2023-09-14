import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import { MapApiService } from '../../services/map-api.service';
import { SettingResult } from 'src/app/interfaces/setting-result';
import { ActivatedRoute } from '@angular/router';
import { MapStateService } from 'src/app/services/map-state.service';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';

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

  constructor(private mapApiService: MapApiService  ) {

  }

  selectedItem?: GeocodeResult;
  ngOnInit(): void {
  }
  async ngAfterViewInit(): Promise<void> {
    if (!this.map && this.mapDiv) {
      this.map = this.mapApiService.initMap(this.mapDiv.nativeElement);
    }
  }
}
