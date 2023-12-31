import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyState, MapState } from '../interfaces/map-state';
import { ImageUploadResponse } from '../interfaces/image-upload-response';
import { lastValueFrom } from 'rxjs';
import { UrlMetaResponse } from '../interfaces/url-meta-response';
import { GeocodeResult } from '../interfaces/geocode-result';
import { RealstateData } from '../interfaces/realstate-item';
import { AccountInfoResponse } from '../interfaces/account-info-response';
import { Guid } from 'guid-ts';
import { ScanResultsDto } from '../interfaces/scan-results-dto';
import { AccountUrlResponse } from '../interfaces/account-url-response';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private httpClient: HttpClient) { }

  async createNewUserState(state: MapState = new EmptyState()): Promise<{
    id: string,
    mapstate: MapState
  }> {
    var dburl = `/api/state`
    var res = (await this.httpClient.post(dburl, { id: "", stateJson: JSON.stringify(state) }).toPromise()) as any;
    return {
      id: res.key,
      mapstate: res.object
    }
  }
  async saveUserStateById(stateId: string, state: MapState) {
    try {
      var dburl = `/api/state/${stateId}`
      state.geoCodeDatabase = {};
      state.geoItems = this.populateGeoId(state?.geoItems);
      await this.httpClient.put(dburl, { id: stateId, stateJson: JSON.stringify(state) }).toPromise();
    } catch (error) {
      console.log(error);
    };
  }

  async getStateById(stateId: string): Promise<MapState> {
    var dburl = `/api/state/${stateId}`
    var res = (await this.httpClient.get(dburl).toPromise()) as any;
    var emptyState = new EmptyState();
    var state: MapState = {
      geoItems: res?.geoItems?? emptyState.geoItems,
      geoCalculatingItems: res?.geoCalculatingItems ?? emptyState.geoCalculatingItems,
      geoRoutePairs: res?.geoRoutePairs ?? emptyState.geoRoutePairs,
      distance: res?.distance ?? emptyState.distance,
      toolState: res?.toolState ?? emptyState.toolState,
      agent: res?.agent ?? emptyState.agent,
      geoCodeDatabase: res?.geoCodeDatabase ?? emptyState.geoCodeDatabase
    };
    return state;
  }

  private populateGeoId(resGeoItems: any): GeocodeResult[] {
    var geoItems = resGeoItems as GeocodeResult[];
    if (!geoItems) {
      return []
    }
    for (let index = 0; index < geoItems.length; index++) {
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
      items[index].id = items[index].id ?? Guid.newGuid().toString();
    }
    return items;
  }



  async getMedataDataFromUrl(url: string): Promise<RealstateData> {
    try {
      const res = await lastValueFrom(this.httpClient.get(`/api/url-scanner/metadata-from-url?url=${url}`));
      var casted = res as UrlMetaResponse;
      var formatedAddress = casted.address.replace(/(\r\n|\n|\r)/gm, "").replaceAll("/", " ");
      var data: RealstateData = {
        id: Guid.newGuid().toString(),
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

  async submitRequestMedataDataFromUrls(request: ScanResultsDto): Promise<string> {
    try {
      const res = await lastValueFrom(this.httpClient.post(`/api/url-scanner/metadata-from-url`, request));
      return (res as any).key;
    } catch (error) {
      console.error('submitRequestMedataDataFromUrl failed', error);
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

  async getAccountInforFromUrl(url: string): Promise<AccountInfoResponse> {
    try {
      const res = await lastValueFrom(this.httpClient.get(`/api/url-scanner/account-from-url?url=${url}`));
      return res as AccountInfoResponse;
    } catch (error) {
      console.error('getAccountInforFromUrl failed', error);
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