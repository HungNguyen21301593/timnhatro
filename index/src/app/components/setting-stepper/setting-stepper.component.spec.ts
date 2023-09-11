/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingStepperComponent } from './setting-stepper.component';

describe('SettingStepperComponent', () => {
  let component: SettingStepperComponent;
  let fixture: ComponentFixture<SettingStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
