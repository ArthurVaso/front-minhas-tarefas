import { Component, Input } from '@angular/core';
import { InputMaterialComponent } from '../../../base-models/input-material/input-material.component';

@Component({
  selector: 'duendindin-input-email-material',
  templateUrl: './input-email-material.component.html',
  styleUrls: ['./input-email-material.component.scss']
})
export class InputEmailMaterialComponent extends InputMaterialComponent {

  @Input()
  public maxLength = 100;

  @Input()
  public minLength = 0;

  constructor() {
    super();
  }

}
