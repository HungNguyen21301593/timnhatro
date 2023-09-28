/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrontpageTrialComponent } from './frontpage-trial.component';

describe('FrontpageTrialComponent', () => {
  let component: FrontpageTrialComponent;
  let fixture: ComponentFixture<FrontpageTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpageTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
