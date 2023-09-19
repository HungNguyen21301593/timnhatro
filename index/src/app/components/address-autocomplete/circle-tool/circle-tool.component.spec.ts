/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CircleToolComponent } from './circle-tool.component';

describe('CircleToolComponent', () => {
  let component: CircleToolComponent;
  let fixture: ComponentFixture<CircleToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
