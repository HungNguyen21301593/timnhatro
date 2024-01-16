/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadiusToolComponent } from './radius-tool.component';

describe('RadiusToolComponent', () => {
  let component: RadiusToolComponent;
  let fixture: ComponentFixture<RadiusToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiusToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiusToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
