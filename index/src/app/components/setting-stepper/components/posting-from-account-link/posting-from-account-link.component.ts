import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Guid } from 'guid-ts';
import { forEach } from 'lodash';
import { AccountUrlResponse } from 'src/app/interfaces/account-url-response';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { ScanResultsDto } from 'src/app/interfaces/scan-results-dto';
import { MapStateService } from 'src/app/services/map-state.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-posting-from-account-link',
  templateUrl: './posting-from-account-link.component.html',
  styleUrls: ['./posting-from-account-link.component.css']
})
export class PostingFromAccountLinkComponent implements OnInit {

  @Input()
  numberOfAllowedListing = 10;

  @Output()
  itemsPosted = new EventEmitter<RealstateData[]>;

  public listings: AccountUrlResponse[] = [];
  public scannedListings: RealstateData[] = [];
  public value = 0;
  public fetchListingsFromUrlSpinner = false;
  public scanSpinner = false;
  public link = '';
  public title = '';
  public numberOfNewRequests = 0;
  public numberOfOngoingRequests = 0;
  public numberOfRequests = this.numberOfNewRequests + this.numberOfOngoingRequests;

  massPostingFormGroup = this._formBuilder.group({
    realstateDatas: [[] as RealstateData[], Validators.required],
  });
  constructor(private webApiService: WebApiService,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private mapStateService: MapStateService,
    private db: AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PostingFromAccountLinkComponent>) { }

  async ngOnInit() {
    this.link = this.data.link;
    this.title = this.data.title;
    this.listings = this.data.listings;
    await this.scan(this.listings);
    this.db.list('urlscanner', ref => ref.orderByChild("status").equalTo(0)).valueChanges().subscribe((value: any) => {
      this.numberOfNewRequests = value.length;
    });
    this.db.list('urlscanner', ref => ref.orderByChild("status").equalTo(1)).valueChanges().subscribe((value: any) => {
      this.numberOfOngoingRequests = value.length;
    });
  }

  filterNewListing(input: AccountUrlResponse[], allCurrent: RealstateData[]) {
    var allCurrentTitles = allCurrent.map(e => e.title);
    return input.filter(item => !allCurrentTitles.includes(item.title));
  }

  async scan(listings: AccountUrlResponse[]) {
    this.scanSpinner = true;
    this.value = 0;
    this.scannedListings = [];
    this.massPostingFormGroup.patchValue({ realstateDatas: [] })
    this.subscribeForDataFromUrls(listings);
  }

  async subscribeForDataFromUrls(listings: AccountUrlResponse[]) {
    var urls = listings.map(listing => listing.url);

    var request: ScanResultsDto = {
      key: "",
      urls: urls,
      status: 0,
      urlMetaResults: [],
      createdOn: null
    }
    var key = await this.webApiService.submitRequestMedataDataFromUrls(request);
    var subscribe = this.db.object(`urlscanner/${key}`).valueChanges().subscribe((value: any) => {
      if ((value?.urlMetaResults?.length ?? 0) == 0) {
        return;
      }
      var results = value?.urlMetaResults as RealstateData[];
      this.scannedListings = results.map(result => { result.id = Guid.newGuid().toString(); return result });
      this.value = Math.round((this.scannedListings?.length ?? 0) / (this.listings.length) * 100);
      if (this.scannedListings.length == this.listings.length) {
        this.populateImages(this.scannedListings);
        this.massPostingFormGroup.patchValue({ realstateDatas: this.scannedListings });
        this.scanSpinner = false;
        subscribe.unsubscribe();
      }
    })
  }

  populateImages(scannedListings: RealstateData[])
  {
    scannedListings.forEach(scannedListing => {
      var images = this.listings.find(listing=>listing.url == scannedListing.html)?.images;
      if (images) {
        scannedListing.images = images;
      }
    }); 
  }

  postall() {
    var items = this.massPostingFormGroup.value.realstateDatas;
    if (!items) {
      return;
    }
    this.itemsPosted.emit(items);
    this.snackBar.open(`Đăng ${items.length} bài thành công, map của bạn đang được tải lên, vui lòng chờ trong giây lát!`, "", { duration: 2000 });
    this.dialogRef.close({ items: items })
    this.reset();
  }

  reset() {
    this.massPostingFormGroup.patchValue({ realstateDatas: [] });
    this.listings = [];
  }
}
