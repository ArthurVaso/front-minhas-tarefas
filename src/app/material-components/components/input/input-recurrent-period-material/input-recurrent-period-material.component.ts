import { InputMaterialComponent } from 'src/app/material-components/base-models/input-material/input-material.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-recurrent-period-material',
  templateUrl: './input-recurrent-period-material.component.html',
  styleUrls: ['./input-recurrent-period-material.component.scss']
})
export class InputRecurrentPeriodMaterialComponent extends InputMaterialComponent {

  @Input()
  public maxLength = 30;

  @Input()
  public minLength = 0;

  @Output()
  public onKeyUpDuenDinDin = new EventEmitter<string>();

  constructor() { 
    super();
  }

  onKeyUpCep() {
    this.onKeyUpDuenDinDin.emit(this.value);
  }

}
