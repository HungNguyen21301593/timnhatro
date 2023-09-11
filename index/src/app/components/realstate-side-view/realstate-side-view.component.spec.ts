/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealstateSideViewComponent } from './realstate-side-view.component';

describe('RealstateSideViewComponent', () => {
  let component: RealstateSideViewComponent;
  let fixture: ComponentFixture<RealstateSideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealstateSideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateSideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
