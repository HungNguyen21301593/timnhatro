import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RealstateData } from 'src/app/interfaces/realstate-item';
import { AbstractControlDirective, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
import { Constant } from 'src/app/interfaces/constant.enum';
import _ from 'lodash';
import { Guid } from 'guid-ts';



@Component({
  selector: 'app-input-sheet-table',
  templateUrl: './input-sheet-table.component.html',
  styleUrls: ['./input-sheet-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputSheetTableComponent
    }
  ]
})
export class InputSheetTableComponent implements OnInit, OnDestroy, ControlValueAccessor {
  stateChanges = new Subject<void>();
  @Output()
  itemsUpdated = new EventEmitter<RealstateData[]>();

  id: string = "test id";
  placeholder: string = "";
  focused: boolean = false;
  empty: boolean = false;
  shouldLabelFloat: boolean = false;
  required: boolean = false;
  errorState: boolean = false;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;

  selectedItem?: RealstateData | undefined;
  columnsToDisplay = ['title'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expanded = false;

  setDescribedByIds(ids: string[]): void {
  }
  onContainerClick(event: MouseEvent): void {
  }
  disabled = false;

  writeValue(obj: any): void {
    this.value = _.cloneDeep(_.orderBy(obj, ['id'], ['desc']));
    this.selectedItem = this.value.length > 0 ? this.value[0] : undefined;
  }
  onChange = (value: RealstateData[]) => { };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched = (value: RealstateData[]) => { };
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  value: RealstateData[] | null = [];
  constructor() {
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  ngOnInit(): void {
  }
 
  selected(id: String)
  {
    if (!this.value) {
      return;
    }
    var index = this.value?.findIndex(e => e.id == id) ?? 0;
    this.selectedItem = this.value[index];
  }

  expandItem()
  {
    this.expanded= !this.expanded;
  }

  deletedItem(element?: RealstateData) {
    if (element == undefined) {
      return;
    }
    this.value = this.value?.filter(item => item.id !== element.id) ?? [];
    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
    this.selectedItem = undefined;
  }

  itemUpdated(element: RealstateData) {
    if (!this.value) {
      return;
    }
    this.updateElement(element);
    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
  }

  updateElement(element: RealstateData){
    if (!this.value) {
      return;
    }
    var index = this.value?.findIndex(RealstateData => RealstateData.id === element.id);
    if (index == -1) {
      return;
    }
    this.value[index] = element;
  }
}
