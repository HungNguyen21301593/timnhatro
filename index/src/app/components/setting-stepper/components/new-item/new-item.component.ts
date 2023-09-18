import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constant } from 'src/app/interfaces/constant.enum';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import _ from 'lodash';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Output()
  itemposted = new EventEmitter<RealstateData>();

  emptyElement: RealstateData = {
    id: "0",
    address: "",
    description: "",
    html: "",
    images: [],
    title: Constant.newPostTitle
  };
  public element!: RealstateData;
  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset()
  {
    this.element = _.cloneDeep(this.emptyElement);
  }

  itemPosted(element: RealstateData) {
    this.itemposted.emit(element);
    this.reset();
  }
}
