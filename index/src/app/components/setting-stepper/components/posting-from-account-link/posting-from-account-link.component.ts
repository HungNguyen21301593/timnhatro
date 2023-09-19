import { Component, OnInit } from '@angular/core';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-posting-from-account-link',
  templateUrl: './posting-from-account-link.component.html',
  styleUrls: ['./posting-from-account-link.component.css']
})
export class PostingFromAccountLinkComponent implements OnInit {

  listings: string[] = [];
  constructor(private webApiService:WebApiService) { }

  ngOnInit() {
  }

  fetchListingsFromUrl(link: string) {
    
  }
}
