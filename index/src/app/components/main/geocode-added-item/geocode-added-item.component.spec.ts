/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeocodeAddedItemComponent } from './geocode-added-item.component';

describe('GeocodeAddedItemComponent', () => {
  let component: GeocodeAddedItemComponent;
  let fixture: ComponentFixture<GeocodeAddedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocodeAddedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocodeAddedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
