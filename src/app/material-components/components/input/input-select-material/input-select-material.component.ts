import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-select-material',
  templateUrl: './input-select-material.component.html',
  styleUrls: ['./input-select-material.component.scss']
})
export class InputSelectMaterialComponent implements OnInit {

  @Input()
  public disabled = false;

  @Input()
  public width: '25' | '50' | '75' | '100' = '100';

  @Input()
  public required: 'required' | 'false' = 'false';

  @Input()
  public value: any = '';

  @Input()
  public label = '';

  @Input()
  public dataSource: any[] = [];

  @Input()
  public textField: any = '';

  @Input()
  public valueField: any = '';

  @Output()
  public valueChange = new EventEmitter<any>();

  @Output()
  public onChangeDuenDinDin = new EventEmitter<any>();
  
  constructor() { }
  
  onChangeValue($event: any) {
    
    this.valueChange.emit(this.value);
    this.onChangeDuenDinDin.emit(this.value);
  }

  ngOnInit(): void {}

  public isNumber(): boolean {
    return (typeof this.value == 'string') ? true : false;
  }

}
