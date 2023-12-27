import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { AgentProfile } from 'src/app/interfaces/agent-profile';
import { Constant } from 'src/app/interfaces/constant.enum';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { MapApiService } from 'src/app/services/map-api.service';
import { WebApiService } from 'src/app/services/web-api.service';
@Component({
  selector: 'app-geo-added-home',
  templateUrl: './geo-added-home.component.html',
  styleUrls: ['./geo-added-home.component.css']
})
export class GeoAddedHomeComponent implements OnInit {
  @Input()
  item!: GeocodeResult;

  @Input()
  agent!: AgentProfile;

  @Input()
  expanded = false;

  @Output()
  closed = new EventEmitter();

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  public isLoadingLink = false;
  public selectedElementIndex = 0;
  public iframeElement: string = '';
  public  linkToMsg: string = '';

  constructor(private mapApiService: MapApiService,
    private snackBar: MatSnackBar,
    private webApiService: WebApiService,
    private dialogRef: MatDialogRef<GeoAddedHomeComponent>) { }

  async ngOnInit() {
    if (!this.item) {
      return;
    }
    this.linkToMsg = `tel:${this.agent.phone}`;
  }

  async loadReadStateData(realstateData: RealstateData, link: string) {
    if (realstateData.title !== Constant.newPostTitle || link === '') {
      return;
    }
    this.isLoadingLink = true;
    var metadata = await this.webApiService.getMedataDataFromUrl(link);
    realstateData.html = link;
    realstateData.description = metadata.description;
    realstateData.title = metadata.title;
    realstateData.images = metadata.images;
    realstateData.id = metadata.id;
    this.isLoadingLink = false;
  }

  target() {
    if (!this.item) {
      return
    }
    this.closed.emit();
    this.dialogRef.close();
    this.mapApiService.zoomToLocations([this.item], 16);
  }

  direction() {
    if (!this.item.address) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.item.realstateData[this.selectedElementIndex].address}`, '_blank');
  }

  back() {
    this.closed.emit();
    this.dialogRef.close();
  }

  share(link: string) {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }
}