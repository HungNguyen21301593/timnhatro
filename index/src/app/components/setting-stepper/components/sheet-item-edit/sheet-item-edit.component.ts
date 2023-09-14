import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-sheet-item-edit',
  templateUrl: './sheet-item-edit.component.html',
  styleUrls: ['./sheet-item-edit.component.css']
})
export class SheetItemEditComponent implements OnInit {
  @Input()
  RealstateData: RealstateData | undefined | null;

  @Output()
  updated = new EventEmitter<RealstateData>();

  @Output()
  deleted = new EventEmitter<RealstateData>();

  sheetItemEditForm = this._formBuilder.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required],
    html: ['', Validators.required],
  });

  imageIndex = 0;
  selectedImages: string[] = [];
  constructor(private _formBuilder: FormBuilder, private webApiService: WebApiService) { }

  ngOnInit() {
    if (!this.RealstateData) {
      return;
    }
    this.sheetItemEditForm.patchValue(this.RealstateData);
    this.selectedImages = this.RealstateData.images;
  }

  async fetchContentFromUrl(url: string)
  {
    if(!url)
    {
      return;
    }
    var response = await this.webApiService.getMedataDataFromUrl(url);
    this.sheetItemEditForm.patchValue(response);
    this.selectedImages = [response.image];
  }

  update() {
    var formValue = this.sheetItemEditForm.value;
    var value: RealstateData
      = {
      id: formValue.id ?? "0",
      title: formValue.title ?? '',
      address: formValue.address ?? '',
      description: formValue.description ?? '',
      images: this.selectedImages ?? [],
      html: formValue.html ?? ''
    }
    this.updated.emit(value)
  }

  deleteItem() {
    var formValue = this.sheetItemEditForm.value;
    var value: RealstateData
      = {
      id: formValue.id ?? "0",
      title: formValue.title ?? '',
      address: formValue.address ?? '',
      description: formValue.description ?? '',
      images: this.selectedImages,
      html: formValue.html ?? ''
    }
    this.deleted.emit(value)
  }

  imagesUpdated(urls: string[]) {
    this.selectedImages = urls;
  }
}
