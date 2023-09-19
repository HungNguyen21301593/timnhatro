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
import _ from 'lodash';
import { Constant } from 'src/app/interfaces/constant.enum';
import { GeneralHelper } from 'src/app/services/Util/general-helper';
@Component({
  selector: 'app-setting-stepper',
  templateUrl: './setting-stepper.component.html',
  styleUrls: ['./setting-stepper.component.css']
})
export class SettingStepperComponent implements OnInit {

  @ViewChild('mapIframe') mapIframe?: HTMLIFrameElement;

  realstateDatasInit: RealstateData[] = [];
  settingFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    description: ['', null],
    image: ['', Validators.required],
    realstateDatas: [this.realstateDatasInit, Validators.required],
  });

  public mapUrl: null | SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('main');
  public imagesUploadInProgress = false;
  public uploadedImageUrl = '';

  constructor(private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mapStateService: MapStateService,
    private sanitizer: DomSanitizer,
    private webApiService: WebApiService) { }

  async ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      var phone = params['phone'];
      if (!phone) {
        throw new Error('there is no phone in url param')
      }
      var state = await this.mapStateService.reloadStateFromUrlParams(phone);
      if (state == null) {
        state = await this.webApiService.createNewUserStateByPhone(phone, {
          agent: {
            phone: phone,
            name: "",
            image: "",
            description: ""
          },
          geoItems: [],
          geoCalculatingItems: [],
          geoRoutePairs: [],
          toolMode: ToolMode.normal,
          distance: 1000
        });

      }
      this.realoadUser(state);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlUtil.getMapUrlForUser(phone));
    })
  }

  realoadUser(state: MapState) {
    var realstate = this.filteroutPostedItems(state.geoItems.map(item => item.realstateData).flat());
    this.settingFormGroup.patchValue({
      name: state.agent.name,
      phone: state.agent.phone,
      description: state.agent.description,
      image: state.agent.image,
      realstateDatas: realstate
    });
  }

  public itemposted(item: RealstateData) {
    var currentRealstateDatas = this.settingFormGroup.value.realstateDatas ?? [];
    var nextId = Math.max(...currentRealstateDatas.map(r => Number(r.id))) + 1;
    item.id = nextId.toString();
    currentRealstateDatas?.push(item);
    if (!currentRealstateDatas) {
      return;
    }
    this.settingFormGroup.get('realstateDatas')?.setValue(this.filteroutPostedItems(currentRealstateDatas));
  }


  private filteroutPostedItems(items: RealstateData[]): RealstateData[] {
    return items.filter(r => !r.title.includes(Constant.newPostTitle));
  }

  async save() {
    var phone = this.settingFormGroup.value.phone;
    if (!phone) {
      return;
    }
    
    await this.extractAndSave(phone);
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlUtil.getMapUrlForUser(phone));
  }

  private async extractAndSave(phone: string) {
    var state = this.mapStateService.stateObservable.value;
    var newState = await this.extractMapState(state);
    this.mapStateService.stateObservable.next(newState);
    await this.webApiService.saveUserStateByPhone(phone, newState);
  }

  private async extractMapState(state: MapState): Promise<MapState> {
    var items = this.settingFormGroup.value.realstateDatas;
    if (!items) {
      return state;
    }
    var agent = this.settingFormGroup.value;
    if (!agent.name || !agent.description || !agent.image || !agent.phone) {
      return state;
    }
    var newState = _.cloneDeep(state);
    newState.agent = {
      name: agent.name,
      phone: agent.phone,
      description: agent.description,
      image: agent.image
    };
    newState.geoItems = await this.mapToGeoItems(items);
    return newState;
  }

  private async mapToGeoItems(realstateData: RealstateData[]): Promise<GeocodeResult[]> {
    var dictionary = groupBy(realstateData, 'address');
    console.log(dictionary);

    var results: GeocodeResult[] = [];
    for (const [key, value] of Object.entries(dictionary)) {
      if (!key) {
        continue;
      }
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        element.id = index.toString();
      }

      var geocodeResults = await this.mapStateService.getGeoCodeResult(key, true);
      var geoItem: GeocodeResult = {
        id: 0,
        address: { label: key },
        position: geocodeResults[0].position,
        type: 'Home',
        realstateData: value,
        color: GeneralHelper.getRandomRGB(1)
      }
      results.push(geoItem);
    }
    return results;
  }

  publish() {
    this.router.navigate(['main', this.settingFormGroup.value.phone ?? '']);
  }
}
