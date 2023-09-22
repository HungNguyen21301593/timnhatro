/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoAddedItemListComponent } from './geo-added-item-list.component';

describe('GeoAddedItemListComponent', () => {
  let component: GeoAddedItemListComponent;
  let fixture: ComponentFixture<GeoAddedItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoAddedItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
