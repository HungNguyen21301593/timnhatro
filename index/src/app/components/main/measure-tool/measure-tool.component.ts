import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { TravelSummary } from 'src/app/interfaces/route-result';
import { MapStateService } from 'src/app/services/map-state.service';
import { ToolsNavigationService } from 'src/app/services/tools-navigation.service';

@Component({
  selector: 'ngx-measure-tool',
  templateUrl: './measure-tool.component.html',
  styleUrls: ['./measure-tool.component.scss']
})
export class MeasureToolComponent implements OnInit {
  firstSelection: GeocodeResult | undefined;
  secondSelection: GeocodeResult | undefined;
  calculatedResult: TravelSummary |undefined;
  constructor(
    private mapStateService: MapStateService,
    private bottomSheet: MatBottomSheet
    ) { }

  ngOnInit() {
    this.mapStateService.stateObservable.subscribe(state=>{
      this.firstSelection = state.geoCalculatingItems[0];
      this.secondSelection = state.geoCalculatingItems[1];
      this.calculatedResult = state.calculatedResult;
    })
  }


  getResultText()
  {
    if (!this.calculatedResult) {
      return "";
    }
    return `${Math.round(this.calculatedResult.length / 100) / 10} Km, ${Math.round(this.calculatedResult.duration / 60)} Phút`
  }

  close()
  {
    this.bottomSheet.dismiss();
    this.mapStateService.setToolStatus(undefined);
  }
}
