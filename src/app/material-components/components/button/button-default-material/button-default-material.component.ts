import { ButtonMaterialComponent } from 'src/app/material-components/base-models/button-material/button-material.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-default-material',
  templateUrl: './button-default-material.component.html',
  styleUrls: ['./button-default-material.component.scss']
})
export class ButtonDefaultMaterialComponent extends ButtonMaterialComponent {

  @Input()
  rounded = false;

  @Input()
  icon = '';

  constructor() {
    super();
  }

}

