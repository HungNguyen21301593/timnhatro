import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'ngx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('drawerHomeAddedItems') drawerHomeAddedItems?: MatDrawer;

  @ViewChild('drawerAutoSearch') drawerAutoSearch?: MatDrawer;
  constructor() { }

  ngOnInit() {
  }

}
