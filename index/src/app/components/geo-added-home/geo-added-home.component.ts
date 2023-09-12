import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgentProfile } from 'src/app/interfaces/agent-profile';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapApiService } from 'src/app/services/map-api.service';
import { MapStateService } from 'src/app/services/map-state.service';

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

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor(private mapApiService: MapApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  target() {
    if (!this.item) {
      return
    }
    this.accordion?.closeAll();
    this.mapApiService.zoomToLocations([this.item], 16);
  }

  back() {
    this.accordion?.closeAll();
  }

  share() {
    var link = "http://localhost:4200/main/0858008266";
    var message = `Hi bạn, mình có nhu cầu được tư vấn thêm về nhà trọ này: ${link}`;
    navigator.clipboard.writeText(message);
    this.snackBar.open(`Đã sao chép: ${message}`, "", { duration: 2000 });
  }
}
