import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { RealstateData } from 'src/app/interfaces/realstate-item';
@Component({
  selector: 'app-geo-added-home',
  templateUrl: './geo-added-home.component.html',
  styleUrls: ['./geo-added-home.component.css']
})
export class GeoAddedHomeComponent implements OnInit {
  @Input()
  item!: GeocodeResult;

  public selectedElement: RealstateData | undefined = undefined;
  constructor() { }

  async ngOnInit() {
    this.selectedElement = this.item.realstateData[0];
  }
}