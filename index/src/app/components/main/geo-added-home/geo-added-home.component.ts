import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  constructor(private dialogRef: MatDialogRef<GeoAddedHomeComponent>) { }

  async ngOnInit() {
    this.selectedElement = this.item.realstateData[0];
  }

  direction() {
    if (!this.item.address) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.item.address.label}`, '_blank');
  }

  call()
  {
    if (!this.agent) {
      return;
    }
    window.location.href =`tel:${this.agent?.phone}`;
  }

  gotoZalo()
  {
    if (!this.agent) {
      return;
    }
    // window.open(`https://zalo.me/${this.agent?.phone}`, '_blank');
    window.open(`zalo://conversation?phone=${this.agent?.phone}`, '_blank');
  }

  close()
  {
    this.dialogRef.close();
  }
}