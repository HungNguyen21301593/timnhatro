/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostingFromAccountLinkComponent } from './posting-from-account-link.component';

describe('PostingFromAccountLinkComponent', () => {
  let component: PostingFromAccountLinkComponent;
  let fixture: ComponentFixture<PostingFromAccountLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingFromAccountLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingFromAccountLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
