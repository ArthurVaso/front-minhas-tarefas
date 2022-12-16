import { ButtonMaterialComponent } from 'src/app/material-components/base-models/button-material/button-material.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-redirect-material',
  templateUrl: './button-redirect-material.component.html',
  styleUrls: ['./button-redirect-material.component.scss']
})
export class ButtonRedirectMaterialComponent extends ButtonMaterialComponent {

  @Input()
  public url: string[] = ['/'];

  constructor() {
    super();
  }

}
