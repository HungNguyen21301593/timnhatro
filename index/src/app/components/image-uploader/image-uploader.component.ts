import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @Input()
  inputImages: string[] | undefined;


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
