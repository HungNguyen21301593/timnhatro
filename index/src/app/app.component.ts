import { Component, OnInit } from '@angular/core';
import { SettingResult } from './interfaces/setting-result';
import { MapStateService } from './services/map-state.service';
import { Subscription } from 'rxjs';
import { GeocodeResult } from './interfaces/geocode-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timnhatro';
  constructor() {
  }
  susciption!: Subscription;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
