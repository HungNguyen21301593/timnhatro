import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  @Output()
  closed = new EventEmitter();

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  public iframeElement: string = '';

  constructor(private mapApiService: MapApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  generateIframe(link: string)
  {
    var encodedLink = encodeURIComponent(link);
    return `<iframe src="https://www.facebook.com/plugins/post.php?href=${encodedLink}&show_text=true&width=500" width="500" height="625" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
  }

  target() {
    if (!this.item) {
      return
    }
    this.closed.emit();
    this.mapApiService.zoomToLocations([this.item], 16);
  }

  back() {
    this.closed.emit();
  }

  share(link:string) {
    window.location.href = link;
  }
}