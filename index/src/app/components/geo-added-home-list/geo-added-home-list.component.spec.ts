/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoAddedHomeListComponent } from './geo-added-home-list.component';

describe('GeoAddedHomeListComponent', () => {
  let component: GeoAddedHomeListComponent;
  let fixture: ComponentFixture<GeoAddedHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoAddedHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoAddedHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
