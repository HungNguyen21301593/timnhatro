import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AgentProfile } from 'src/app/interfaces/agent-profile';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {

  subscription?: Subscription;
  public realstateAgent?: AgentProfile | null | undefined;
  selectedImage?: string;

  constructor(private mapStateService: MapStateService) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.mapStateService.stateObservable.subscribe((state => {
      this.realstateAgent = state.agent;
    }))
  }
}
