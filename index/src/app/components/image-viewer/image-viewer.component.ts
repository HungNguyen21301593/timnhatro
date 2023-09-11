import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  public _images: string[] = [];
  @Input() set images(value: string[]) {
    this._images = value;
    this.selectedImage = this._images[0];
  }

  get images(): string[] {
    return this._images;
  }

  @Input()
  public width: string = 'auto';

  @Input()
  public height: string = '400';

  public selectedImage = this.images[0];

  constructor() { }

  ngOnInit() {

  }
}
