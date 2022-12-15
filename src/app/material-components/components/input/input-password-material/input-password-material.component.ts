import { Component, Input } from '@angular/core';
import { InputMaterialComponent } from '../../../base-models/input-material/input-material.component';

@Component({
  selector: 'duendindin-input-password-material',
  templateUrl: './input-password-material.component.html',
  styleUrls: ['./input-password-material.component.scss']
})
export class InputPasswordMaterialComponent extends InputMaterialComponent {

  @Input()
  public maxLength = 30;

  @Input()
  public minLength = 0;

  hide = true;

  constructor() { 
    super();
  }

}
