import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { WebApiService } from 'src/app/services/web-api.service';
import _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-ts';

@Component({
  selector: 'app-sheet-item-edit',
  templateUrl: './sheet-item-edit.component.html',
  styleUrls: ['./sheet-item-edit.component.css']
})
export class SheetItemEditComponent implements OnInit {

  private _realstateData: RealstateData | undefined | null;
  public get realstateData(): RealstateData | undefined | null {
    return this._realstateData;
  }

  @Input()
  public set realstateData(v: RealstateData | undefined | null) {
    this._realstateData = _.cloneDeep(v);
    if (!this.realstateData) {
      return;
    }
    this.sheetItemEditForm.patchValue(this.realstateData);
    this.selectedImages = this.realstateData?.images ?? [];
  }

  @Input()
  isNew = false;

  @Input()
  expanded = false;

  @Output()
  updatedOrPosted = new EventEmitter<RealstateData>();

  @Output()
  deleted = new EventEmitter<RealstateData>();

  sheetItemEditForm = this._formBuilder.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required],
    html: ['', Validators.required],
  });

  public linkloading = false;
  imageIndex = 0;
  selectedImages: string[] = [];

  constructor(private _formBuilder: FormBuilder, private webApiService: WebApiService, private snackBar: MatSnackBar,) { }

  ngOnInit() {
    if (!this.realstateData) {
      return;
    }
    this.sheetItemEditForm.patchValue(this.realstateData);
    this.selectedImages = this.realstateData.images;
    this.sheetItemEditForm.valueChanges.subscribe(()=>{
      this.update();
    });
  }

  async fetchContentFromUrl(url: string) {
    if (!url) {
      return;
    }
    this.linkloading = true;
    var response = await this.webApiService.getMedataDataFromUrl(url);
    var data: RealstateData = {
      id: response.id,
      address: response.address,
      description: response.description,
      images: response.images,
      title: response.title,
      html: url
    }
    this.sheetItemEditForm.patchValue(data);
    this.selectedImages = response.images;
    this.linkloading = false;
  }

  update() {
    var formValue = this.sheetItemEditForm.value;
    if (!formValue.address) {
      this.snackBar.open("Bạn chưa cập nhật địa chỉ!", "", { duration: 2000 });
      return;
    }
    var value: RealstateData
      = {
      id: formValue.id ?? Guid.newGuid().toString(),
      title: formValue.title ?? '',
      address: formValue.address ?? '',
      description: formValue.description ?? '',
      images: this.selectedImages ?? [],
      html: formValue.html ?? ''
    }
    this.updatedOrPosted.emit(value);
  }

  deleteItem() {
    var formValue = this.sheetItemEditForm.value;
    var value: RealstateData
      = {
      id: formValue.id ?? Guid.newGuid().toString(),
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
