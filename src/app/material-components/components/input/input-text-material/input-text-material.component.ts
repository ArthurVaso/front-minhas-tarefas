import { Component, Input } from '@angular/core';
import { InputMaterialComponent } from '../../../base-models/input-material/input-material.component';

@Component({
  selector: 'input-text-material',
  templateUrl: './input-text-material.component.html',
  styleUrls: ['./input-text-material.component.scss']
})
export class InputTextMaterialComponent extends InputMaterialComponent {

  @Input()
  public maxLength = 100;

  @Input()
  public minLength = 0;

  @Input()
  public onlyLetters = false;

  constructor() {
    super();
  }

}
