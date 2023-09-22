import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeocodeResult } from 'src/app/interfaces/geocode-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input()
  result: GeocodeResult | undefined;

  @Output()
  addedItem = new EventEmitter<GeocodeResult>();

  constructor() { }

  ngOnInit() {
  }

  AddItem(result: GeocodeResult | undefined, type: string) {
    if (!result) {
      return;
    }
    switch (type) {
      case 'Home':
        result.type = type;
        this.addedItem.emit(result);
        break;
      case 'Office':
        result.type = type;
        this.addedItem.emit(result);
        break;
      default:
        break;
    }
  }
}
