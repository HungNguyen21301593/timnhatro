import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;

  public items!: GeocodeResult[];
  constructor() {
  }

  ngOnInit() {
   
  }
}
