/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestateViewContentComponent } from './restate-view-content.component';

describe('RestateViewContentComponent', () => {
  let component: RestateViewContentComponent;
  let fixture: ComponentFixture<RestateViewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestateViewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestateViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
