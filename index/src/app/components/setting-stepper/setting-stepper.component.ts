import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { MapStateService } from 'src/app/services/map-state.service';
import { UrlUtil } from 'src/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MapState, ToolMode } from 'src/app/interfaces/map-state';
import { groupBy } from 'underscore';
import { WebApiService } from 'src/app/services/web-api.service';
import _, { forEach } from 'lodash';
import { Constant } from 'src/app/interfaces/constant.enum';
import { GeneralHelper } from 'src/app/services/Util/general-helper';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-ts';
@Component({
  selector: 'app-setting-stepper',
  templateUrl: './setting-stepper.component.html',
  styleUrls: ['./setting-stepper.component.css']
})
export class SettingStepperComponent implements OnInit {

  @ViewChild('mapIframe') mapIframe?: HTMLIFrameElement;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  realstateDatasInit: RealstateData[] = [];
  settingFormGroup = this._formBuilder.group({
    name: ['', null],
    phone: ['', null],
    link: ['', null],
    description: ['', null],
    image: ['', null],
    realstateDatas: [this.realstateDatasInit, Validators.required],
  });

  public mapUrl: null | SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('main');
  public imagesUploadInProgress = false;
  public uploadedImageUrl = '';
  stateId?:string;

  constructor(private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mapStateService: MapStateService,
    private sanitizer: DomSanitizer,
    private webApiService: WebApiService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.stateId = params['stateId'];
      if (!this.stateId) {
        throw new Error('there is no phone in url param')
      }
      var state = await this.mapStateService.reloadState(this.stateId);
      if (!state) {
        throw new Error('there is state')
      }
      this.populatedUser(state);
          
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlUtil.getMapUrlForUser(this.stateId));
    })
  }

  populatedUser(state: MapState) {
    var realstate = this.filteroutPostedItems(state.geoItems.map(item => item.realstateData).flat());
    this.settingFormGroup.patchValue({
      name: state.agent.name,
      phone: state.agent.phone,
      link: state.agent.link,
      description: state.agent.description,
      image: state.agent.image,
      realstateDatas: realstate
    });
  }

  public async itemposted(items: RealstateData[]) {
    var currentRealstateDatas = this.settingFormGroup.value.realstateDatas ?? [];
    items.forEach(item => {

      var index = currentRealstateDatas.findIndex(currentRealstateData => currentRealstateData.title == item.title);
      if (index == -1) {
        currentRealstateDatas?.push(item);
      }
      else {
        currentRealstateDatas[index] = item;
      }

    });
    if (!currentRealstateDatas) {
      return;
    }
    this.settingFormGroup.get('realstateDatas')?.setValue(this.filteroutPostedItems(currentRealstateDatas));
    await this.save();
  }


  private filteroutPostedItems(items: RealstateData[]): RealstateData[] {
    return items.filter(r => !r.title.includes(Constant.newPostTitle));
  }

  async save() {
    if (!this.stateId) {
      throw new Error("No state Id");
    }
    await this.extractAndSave(this.stateId);
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlUtil.getMapUrlForUser(this.stateId));
    this.mapIframe?.contentWindow?.location.reload();
  }

  private async extractAndSave(stateId:string) {
    var state = this.mapStateService.stateObservable.value;
    var newState = await this.extractMapState(state);
    newState.geoCodeDatabase = this.mapStateService.stateObservable.getValue().geoCodeDatabase;
    this.mapStateService.stateObservable.next(newState);
    await this.webApiService.saveUserStateById(stateId, newState);
  }

  private async extractMapState(state: MapState): Promise<MapState> {
    var items = this.settingFormGroup.value.realstateDatas ?? [];
    var agent = this.settingFormGroup.value;
    var newState = _.cloneDeep(state);
    newState.agent = {
      name: agent.name ?? "",
      phone: agent.phone ?? "",
      description: "",
      image: "",
      link: agent.link ?? ""
    };
    newState.geoItems = await this.mapStateService.mapToGeoItems(items);
    return newState;
  }

  

  publish() {
    this.router.navigate(['main', this.stateId ?? '']);
  }
}
