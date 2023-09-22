import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtil } from 'src/environment';
import { MapState, ToolMode } from '../interfaces/map-state';
import { ImageUploadResponse } from '../interfaces/image-upload-response';
import { lastValueFrom } from 'rxjs';
import { UrlMetaResponse } from '../interfaces/url-meta-response';
import { GeocodeResult } from '../interfaces/geocode-result';
import { RealstateData } from '../interfaces/realstate-item';
import { AccountUrlResponse } from '../interfaces/account-url-response';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  get id(): number {
    var currentValue = this._id;
    this._id = currentValue + 1;
    return currentValue;
  }
  _id = 0;

  constructor(private httpClient: HttpClient) { }

  async createNewUserStateByPhone(phone: string, state: MapState): Promise<MapState> {
    var dburl = UrlUtil.getDbUrlForUser(phone);
    state.agent.phone = phone;
    var res = (await this.httpClient.put(dburl, { state: state }).toPromise()) as any;
    return res?.state;
  }

  async getUserStateByPhone(phone: string): Promise<MapState> {
    var dburl = UrlUtil.getDbUrlForUser(phone);
    var res = (await this.httpClient.get(dburl).toPromise()) as any;
    var state: MapState = {
      geoItems: this.populateGeoId(res?.state?.geoItems) ?? [],
      geoCalculatingItems: res?.state?.geoCalculatingItems ?? [],
      geoRoutePairs: res?.state?.geoRoutePairs ?? [],
      distance: res?.state?.distance ?? 1000,
      toolMode: res?.toolMode ?? ToolMode.normal,
      agent: res?.state?.agent ?? {},
      geoCodeDatabase: res?.state?.geoCodeDatabase ?? {}
    };
    console.log(state);
    return state;
  }

  private populateGeoId(resGeoItems: any): GeocodeResult[] {
    var geoItems = resGeoItems as GeocodeResult[];
    if (!geoItems) {
      return []
    }
    for (let index = 0; index < geoItems.length; index++) {
      geoItems[index].id = index;
      geoItems[index].realstateData = this.populateRealstateId(geoItems[index].realstateData);
    }
    return geoItems;
  }

  private populateRealstateId(resRealstateItems: any): RealstateData[] {
    var items = resRealstateItems as RealstateData[];
    if (!items) {
      return [];
    }
    for (let index = 0; index < items.length; index++) {
      items[index].id = this.id.toString();
    }
    return items;
  }

  async saveUserStateByPhone(phone: string, state: MapState) {
    try {
      var url = UrlUtil.getDbUrlForUser(phone);
      state.geoCodeDatabase = {};
      await this.httpClient.put(url, { state: state }).toPromise();
    } catch (error) {
      console.log(error);
    };
  }

  async getMedataDataFromUrl(url: string): Promise<RealstateData> {
    try {
      const res = await lastValueFrom(this.httpClient.get(`/api/url-scanner/metadata-from-url?url=${url}`));
      var casted = res as UrlMetaResponse;
      var formatedAddress = casted.address.replace(/(\r\n|\n|\r)/gm, "").replaceAll("/"," ");
      var data: RealstateData = {
        id: this.id.toString(),
        address: formatedAddress,
        description: casted.description,
        images: casted.images,
        title: casted.title,
        html: url
      }
      return data;
    } catch (error) {
      console.error('getMedataDataFromUrl failed', error);
      throw error;
    }
  }

  async getListingsFromAccountUrl(url: string): Promise<AccountUrlResponse[]> {
    try {
      const res = await lastValueFrom(this.httpClient.get(`/api/url-scanner/listing-from-account?url=${url}`));
      return res as AccountUrlResponse[];
    } catch (error) {
      console.error('getListingsFromAccountUrl failed', error);
      throw error;
    }
  }

  async saveImage(file: File): Promise<string> {
    try {
      var res = await this.uploadImage(file);
      return res?.result.variants[0] ?? "";
    } catch (error) {
      throw new Error(`Failed to save image, error" ${JSON.stringify(error)}`);
    };
  }

  async saveImages(files: FileList): Promise<string[]> {
    var results: string[] = [];
    try {
      for (const file of Array.from(files)) {
        var res = await this.uploadImage(file);
        var url = res?.result.variants[0] ?? "";
        results.push(url);
      }
      return results;
    } catch (error) {
      throw new Error(`Failed to save image, error" ${JSON.stringify(error)}`);
    };
  }

  private async uploadImage(file: File): Promise<ImageUploadResponse | null> {
    if (!file) {
      alert('Please select an image file.');
      return null;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await lastValueFrom(this.httpClient.post('/api/images/upload', formData));
      return res as ImageUploadResponse;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  }
}