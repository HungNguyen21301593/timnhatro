import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from 'src/app/interfaces/constant.enum';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { PostingFromAccountLinkComponent } from '../posting-from-account-link/posting-from-account-link.component';
import { data } from '@here/maps-api-for-javascript';
import { WebApiService } from 'src/app/services/web-api.service';
import { AccountInfoResponse } from 'src/app/interfaces/account-info-response';
import { Guid } from 'guid-ts';
import { AccountUrlResponse } from 'src/app/interfaces/account-url-response';

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
  listings: AccountUrlResponse[] | undefined;
  accountInfo: AccountInfoResponse | undefined;

  constructor(public dialog: MatDialog, private webApiService: WebApiService) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.link = '';
    this.accountInfo = undefined;
    this.listings = undefined;
    this.itemposted.emit([])
  }

  async linkUpdated(link: string)
  {
    if (!link) {
      return;
    }
   this.listings = await this.webApiService.getListingsFromAccountUrl(link);
   this.accountInfo = await this.webApiService.getAccountInforFromUrl(link);
   console.log(this.listings);
   console.log(this.accountInfo);
  }

  async openDialog() {

    switch (this.type) {
      case 'AccountLink':
        this.openMultiplePostDialog();
        break;
      case 'ListingLink':
        // this.openSinglePostDialog(link);
        break;
      default:
        break;
    }
  }

  async openMultiplePostDialog() {
    var dialogRef = this.dialog.open(PostingFromAccountLinkComponent, {
      data: {
        title: "Đăng bài tự động qua link tài khoản",
        listings: this.listings
      },
      minWidth:"70vw",
      maxHeight:"70vh"
    });
    dialogRef.afterClosed().subscribe(data => {
      this.itemposted.emit(data?.items ?? [])
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
