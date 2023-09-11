/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SheetItemEditComponent } from './sheet-item-edit.component';

describe('SheetItemEditComponent', () => {
  let component: SheetItemEditComponent;
  let fixture: ComponentFixture<SheetItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
