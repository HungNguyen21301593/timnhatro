/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MesureToolComponent } from './mesure-tool.component';

describe('MesureToolComponent', () => {
  let component: MesureToolComponent;
  let fixture: ComponentFixture<MesureToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesureToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesureToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
