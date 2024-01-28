import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgentProfile } from 'src/app/interfaces/agent-profile';
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

  @Input()
  agent?: AgentProfile;

  public selectedElement: RealstateData | undefined = undefined;
  constructor() { }

  async ngOnInit() {
    this.selectedElement = this.item.realstateData[0];
  }

  direction() {
    if (!this.item.address) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.item.address.label}`, '_blank');
  }

  gotoZalo()
  {
    window.open(`https://zalo.me/${this.agent?.phone}`, '_blank');
  }
}