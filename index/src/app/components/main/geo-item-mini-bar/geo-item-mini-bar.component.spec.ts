/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoItemMiniBarComponent } from './geo-item-mini-bar.component';

describe('GeoItemMiniBarComponent', () => {
  let component: GeoItemMiniBarComponent;
  let fixture: ComponentFixture<GeoItemMiniBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoItemMiniBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoItemMiniBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
