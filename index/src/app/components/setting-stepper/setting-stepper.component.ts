import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { SettingResult } from 'src/app/interfaces/setting-result';
import { MapStateService } from 'src/app/services/map-state.service';
import { UrlUtil } from 'src/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MapState } from 'src/app/interfaces/map-state';
import { groupBy } from 'underscore';
import { WebApiService } from 'src/app/services/web-api.service';
import _ from 'lodash';
@Component({
  selector: 'app-setting-stepper',
  templateUrl: './setting-stepper.component.html',
  styleUrls: ['./setting-stepper.component.css']
})
export class SettingStepperComponent implements OnInit {

  @ViewChild('mapIframe') mapIframe?: HTMLIFrameElement;

  realstateDatasInit: RealstateData[] = [];
  RealstateDatasFormGroup = this._formBuilder.group({
    RealstateDatas: [this.realstateDatasInit, Validators.required],
  });
  agentFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    description: ['', null],
    image: ['', Validators.required],
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
          geoRoutePairs: []
        });

      }
      this.realoadUser(state);
    })
  }

  realoadUser(state: MapState) {
    this.agentFormGroup.patchValue({
      name: state.agent.name,
      phone: state.agent.phone,
      description: state.agent.description,
      image: state.agent.image
    });
    if (state.agent.image) {
      this.uploadedImageUrl = state.agent.image;
    }

    var realstate = state.geoItems.map(item => item.realstateData).flat();
    this.RealstateDatasFormGroup.patchValue({
      RealstateDatas: realstate
    });
  }

  async onAvatarFileSelected(files: FileList | null) {
    this.imagesUploadInProgress = true;
    var file = files?.item(0);
    if (!file) {
      return;
    }
    this.uploadedImageUrl = await this.webApiService.saveImage(file);
    this.agentFormGroup.get('image')?.setValue(this.uploadedImageUrl);
    this.imagesUploadInProgress = false;
  }



  async done() {
    var items = this.RealstateDatasFormGroup.value.RealstateDatas;
    if (!items) {
      return;
    }
    var agent = this.agentFormGroup.value;
    if (!agent.name || !agent.description || !agent.image || !agent.phone) {
      return;
    }
    await this.save();
  }

  async save() {
    var phone = this.agentFormGroup.value.phone;
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
    var items = this.RealstateDatasFormGroup.value.RealstateDatas;
    if (!items) {
      return state;
    }
    var agent = this.agentFormGroup.value;
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
        address: { label: key },
        position: geocodeResults[0].position,
        type: 'Home',
        realstateData: value
      }
      results.push(geoItem);
    }
    return results;
  }

  publish() {
    this.router.navigate(['main', this.agentFormGroup.value.phone ?? '']);
  }
}
