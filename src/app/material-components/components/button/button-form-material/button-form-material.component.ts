import { ButtonMaterialComponent } from 'src/app/material-components/base-models/button-material/button-material.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'button-form-material',
  templateUrl: './button-form-material.component.html',
  styleUrls: ['./button-form-material.component.scss']
})
export class ButtonFormMaterialComponent extends ButtonMaterialComponent {

  constructor() {
    super();
  }

}

