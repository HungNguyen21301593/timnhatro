import { Component, OnInit } from '@angular/core';
import { MapApiService } from '../../services/map-api.service';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';
import { MapStateService } from 'src/app/services/map-state.service';
import { Subscription } from 'rxjs';
import { Constant } from 'src/app/interfaces/constant.enum';

@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.css']
})
export class AddressAutocompleteComponent implements OnInit {
  constructor(private mapApiService: MapApiService, public mapStateService: MapStateService) {

  }
  searchValue = '';
  filteredOptions!: GeocodeResult[];
  subscriptionState?: Subscription;

  async ngOnInit() {
  }

  async search(value: string): Promise<GeocodeResult[]> {
    const filterValue = value.toLowerCase();
    if (filterValue.length % 10 !== 0) {
      return [];
    }
    this.filteredOptions = await this.mapApiService.geocode(filterValue);
    this.filteredOptions.forEach(option => option.realstateData =
      [
        {
          html: "",
          id: "0",
          address: option.address.label,
          description: "",
          images: [],
          title: Constant.newPostTitle
        }
      ]
    )
    return this.filteredOptions;
  }

  clear() {
    this.searchValue = '';
    this.filteredOptions = [];
  }

  addItem(result: GeocodeResult) {
    if (this.mapStateService.checkItemExisting(result)) {
      return;
    }
    this.mapStateService.addNewItem(result);
    this.mapStateService.process();
    this.mapStateService.itemSelectedObservable.next(result);
    this.clear();
  }

}
