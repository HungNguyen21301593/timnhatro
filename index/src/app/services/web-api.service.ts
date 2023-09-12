import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtil } from 'src/environment';
import { MapState } from '../interfaces/map-state';
import { ImageUploadResponse } from '../interfaces/image-upload-response';
import { lastValueFrom } from 'rxjs';
import { forEach } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private httpClient: HttpClient) { }

  async createNewUserStateByPhone(phone: string, state: MapState): Promise<MapState> {
    var dburl = UrlUtil.getDbUrlForUser(phone);
    var res = (await this.httpClient.put(dburl, { state: state }).toPromise()) as any;
    return res?.state;
  }

  async getUserStateByPhone(phone: string): Promise<MapState> {
    var dburl = UrlUtil.getDbUrlForUser(phone);
    var res = (await this.httpClient.get(dburl).toPromise()) as any;
    return res?.state;
  }

  async saveUserStateByPhone(phone: string, state: MapState) {
    try {
      var url = UrlUtil.getDbUrlForUser(phone);
      await this.httpClient.put(url, { state: state }).toPromise();
    } catch (error) {
      console.log(error);
    };
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