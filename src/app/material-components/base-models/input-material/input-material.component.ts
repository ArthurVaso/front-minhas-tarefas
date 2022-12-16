import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-material',
  templateUrl: './input-material.component.html',
  styleUrls: ['./input-material.component.scss']
})
export class InputMaterialComponent {

  @Input()
  public width: '25' | '50' | '75' | '100' = '100';

  @Input()
  public placeHolder = '';

  @Input()
  public value = '';

  @Input()
  public label = '';

  @Output()
  public valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public ngModelChange = new EventEmitter<any>();

  @Input()
  public required: 'required' | 'false' = 'false';

  constructor() { }

  onChangeValue() {
    this.valueChange.emit(this.value);
    this.ngModelChange.emit(this.value);
  }

}
