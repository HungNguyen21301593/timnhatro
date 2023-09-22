import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  private _inputImages: string[] | undefined;
  public get inputImages(): string[] | undefined {
    return this._inputImages;
  }

  @Input()
  public set inputImages(v: string[] | undefined) {
    this.uploadedImages = v ?? [];
    this._inputImages = v;
  }

  @Output()
  imagesChanged = new EventEmitter<string[]>();

  public uploadedImages: string[] = [];
  public imagesUploadInProgress = false;
  constructor(private webApiService: WebApiService) { }

  ngOnInit() {
    this.uploadedImages = this.inputImages ?? [];
  }

  async onFileSelected(files: FileList | null) {
    this.imagesUploadInProgress = true;
    if (!files) {
      return;
    }
    var uploadedImages = await this.webApiService.saveImages(files);
    this.uploadedImages = uploadedImages;
    this.imagesUploadInProgress = false;
    this.imagesChanged.emit(this.uploadedImages);
  }
}
