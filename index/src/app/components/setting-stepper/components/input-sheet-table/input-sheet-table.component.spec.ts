/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputSheetTableComponent } from './input-sheet-table.component';

describe('InputSheetTableComponent', () => {
  let component: InputSheetTableComponent;
  let fixture: ComponentFixture<InputSheetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSheetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSheetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
