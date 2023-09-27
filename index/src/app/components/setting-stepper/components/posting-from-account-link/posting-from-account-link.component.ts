import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountUrlResponse } from 'src/app/interfaces/account-url-response';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { MapStateService } from 'src/app/services/map-state.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-posting-from-account-link',
  templateUrl: './posting-from-account-link.component.html',
  styleUrls: ['./posting-from-account-link.component.css']
})
export class PostingFromAccountLinkComponent implements OnInit {

  @Output()
  itemsPosted = new EventEmitter<RealstateData[]>;

  public listings: AccountUrlResponse[] = [];
  public newListings: AccountUrlResponse[] = [];
  public value = 0;
  public fetchListingsFromUrlSpinner = false;
  public scanSpinner = false;
  public link = '';
  public title = ''

  massPostingFormGroup = this._formBuilder.group({
    realstateDatas: [[] as RealstateData[], Validators.required],
  });
  constructor(private webApiService: WebApiService,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private mapStateService: MapStateService,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<PostingFromAccountLinkComponent>) { }

  async ngOnInit() {
    this.link = this.data.link;
    this.title = this.data.title;
    this.listings = this.data.listings;
    var currentreastates = this.mapStateService.stateObservable.value.geoItems.map(item => item.realstateData).flat();
    this.newListings = this.filterNewListing(this.listings, currentreastates);
    await this.scan(this.newListings);
  }

  filterNewListing(input: AccountUrlResponse[], allCurrent: RealstateData[]) {
    var allCurrentTitles = allCurrent.map(e => e.title);
    return input.filter(item => !allCurrentTitles.includes(item.title));
  }

  async scan(listings: AccountUrlResponse[]) {
    this.scanSpinner = true;
    this.value = 0;
    this.massPostingFormGroup.patchValue({ realstateDatas: [] })
    var results: RealstateData[] = [];
    for (let index = 0; index < listings.length; index++) {
      const listing = listings[index];
      var newRealStateData = await this.scanForSingleListing(listing);
      if (!newRealStateData) {
        continue;
      }
      results.push(newRealStateData);
      this.value = Math.round(index / (listings.length - 1) * 100);
    }
    this.scanSpinner = false;
    this.massPostingFormGroup.patchValue({ realstateDatas: results })
  }

  async scanForSingleListing(listing: AccountUrlResponse): Promise<RealstateData | null> {
    try {
      var listingMetada = await this.webApiService.getMedataDataFromUrl(listing.url);

      var georesults = await this.mapStateService.getGeoCodeResult(listingMetada.address, true);
      if (georesults.length == 0) {
        console.error(`Failed scanning ${listing.url}`);
        return null;
      }
      var newRealStateData: RealstateData = {
        id: listingMetada.id,
        address: georesults[0].address.label,
        description: listingMetada.description,
        html: listing.url,
        images: listing.images.length != 0 ? listing.images : listingMetada.images,
        title: listing.title !== '' ? listing.title : listingMetada.title,
      }
      return newRealStateData;
    } catch (error) {
      console.error(`Failed scanning ${listing.url}`);
      return null;
    }
  }

  postall() {
    var items = this.massPostingFormGroup.value.realstateDatas;
    if (!items) {
      return;
    }
    this.itemsPosted.emit(items);
    this.snackBar.open(`Đăng ${items.length} bài thành công!`, "", { duration: 2000 });
    this.dialogRef.close({ items: items })
    this.reset();
  }

  reset() {
    this.massPostingFormGroup.patchValue({ realstateDatas: [] });
    this.listings = [];
  }
}
