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

  // @ViewChild('target') target: ElementRef | undefined;

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
  setDescribedByIds(ids: string[]): void {
  }
  onContainerClick(event: MouseEvent): void {
  }
  disabled = false;

  writeValue(obj: any): void {
    this.value = _.cloneDeep(_.orderBy(obj, ['id'], ['desc']));
    this.dataSource = this.value ?? [];
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
  dataSource = this.value ?? [];
  columnsToDisplay = ['title'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: RealstateData | null;

  selectEdit(element: RealstateData, target: HTMLDivElement | null = null) {
    this.expandedElement = (this.expandedElement === element) ? null : element;
    var newData = this.updateElement(element);
    this.dataSource = newData;
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }

  addNew() {
    if (this.value?.filter(item => item.title.includes(Constant.newPostTitle))?.length ?? 0 > 0) {
      return;
    }
    var newElement = {
      id: Guid.newGuid().toString(),
      address: "",
      description: "",
      images: [],
      title: Constant.newPostTitle,
      html: ""
    }

    this.value?.push(
      newElement
    )
    this.selectEdit(newElement);
  }

  deletedItem(element: RealstateData) {
    this.value = this.value?.filter(item => item.id !== element.id) ?? [];
    this.dataSource = this.value;

    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
  }

  itemUpdated(element: RealstateData) {
    if (!this.value) {
      return;
    }
    var newData = this.updateElement(element);
    this.value = newData;
    this.dataSource = newData;
    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
  }

  updateElement(element: RealstateData): RealstateData[] {
    if (!this.value) {
      return [];
    }
    var index = this.value?.findIndex(RealstateData => RealstateData.id === element.id);
    if (index == -1) {
      return this.value;
    }
    this.value[index] = element;
    var newData: RealstateData[] = [];
    newData.push(... this.value);
    return newData;
  }
}
