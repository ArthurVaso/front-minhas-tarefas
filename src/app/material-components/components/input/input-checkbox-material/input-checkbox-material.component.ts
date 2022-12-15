import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'duendindin-input-checkbox-material',
  templateUrl: './input-checkbox-material.component.html',
  styleUrls: ['./input-checkbox-material.component.scss']
})
export class InputCheckboxMaterialComponent implements OnInit {

  @Input()
  public label = '';

  @Input()
  public dataSource: any[] = [];

  @Input()
  public textField: any = '';

  @Input()
  public valueField: any = '';

  @Input()
  public value: boolean[] = [];

  @Output()
  public valueChange = new EventEmitter<any>();

  @Output()
  public changeDuenDinDin = new EventEmitter<any>();

  private listReturn: any[] = [];

  constructor() {}

  public onChange(i: number, $event: any) {

    if($event) {
      
      if(!this.listReturn.length) {
        this.listReturn.push(this.dataSource[i]);
      } else {
        if(!this.listReturn.some(item => item[this.valueField] == this.dataSource[i])) {

          if(this.listReturn.length-1 < i) {
            this.listReturn.push(this.dataSource[i]);
          } else {
            this.listReturn.splice(i, 0, this.dataSource[i]);
          }

        } 
      }

    } else {
      if(this.listReturn.some(item => item[this.valueField] == this.dataSource[i][this.valueField])) {
        this.listReturn = this.listReturn.filter(item => item[this.valueField] != this.dataSource[i][this.valueField]);
      }
    }

    this.valueChange.emit(this.listReturn);
    this.changeDuenDinDin.emit(this.listReturn);
  }

  ngOnInit(): void { 
  }

}
