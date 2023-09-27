import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from 'src/app/interfaces/constant.enum';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { PostingFromAccountLinkComponent } from '../posting-from-account-link/posting-from-account-link.component';
import { data } from '@here/maps-api-for-javascript';
import { WebApiService } from 'src/app/services/web-api.service';
import { AccountUrlResponse } from 'src/app/interfaces/account-url-response';
import { Guid } from 'guid-ts';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Input()
  public link = '';

  @Output()
  itemposted = new EventEmitter<RealstateData[]>();

  emptyElement: RealstateData = {
    id: Guid.newGuid().toString(),
    address: "",
    description: "",
    html: "",
    images: [],
    title: Constant.newPostTitle
  };
  public element!: RealstateData;
  type: 'ListingLink' | 'AccountLink' = 'AccountLink';


  constructor(public dialog: MatDialog, private webApiService: WebApiService) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.element = _.cloneDeep(this.emptyElement);
  }

  linkUpdated(link: string)
  {
    if (!link) {
      return;
    }
    if (link.includes("nhatot")) {
      this.type = 'ListingLink';
    }

    if (link.includes("www.chotot.com/user")) {
      this.type = 'AccountLink';
    }
  }

  async fetchListingsFromUrl(link: string) {
    if (!link) {
      return;
    }
    this.linkUpdated(link);

    switch (this.type) {
      case 'AccountLink':
        this.openMultiplePostDialog(link);
        break;
      case 'ListingLink':
        this.openSinglePostDialog(link);
        break;
      default:
        break;
    }

  }

  async openMultiplePostDialog(link: string) {
    var listings = await this.webApiService.getListingsFromAccountUrl(link);

    var dialogRef = this.dialog.open(PostingFromAccountLinkComponent, {
      data: {
        title: "Đăng bài tự động qua link tài khoản",
        link: link,
        listings: listings
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.itemposted.emit(data.items)
    }
    );
  }

  async openSinglePostDialog(link: string) {
    const regex = /\/(\d+)\.htm/;
    var matches = link.match(regex);
    if (!matches) {
      return;
    }
    var listing: AccountUrlResponse =
    {
      images: [],
      listId: Number(matches[1]),
      title: "",
      url: link
    }
    var dialogRef = this.dialog.open(PostingFromAccountLinkComponent, {
      data: {
        title: "Đăng bài tự động qua link bài viết",
        link: link,
        listings: [listing]
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      this.itemposted.emit(data.items)
    }
    );
  }

  multipleItemsPosted(elements: RealstateData[]) {
    this.itemposted.emit(elements);
    this.reset();
  }

  singleItemPosted(element: RealstateData) {
    this.itemposted.emit([element]);
    this.reset();
  }
}
