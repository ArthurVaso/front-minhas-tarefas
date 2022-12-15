import { Component, Input } from '@angular/core';

@Component({
  selector: 'centered-form-material',
  templateUrl: './centered-form-material.component.html',
  styleUrls: ['./centered-form-material.component.scss']
})
export class CenteredFormMaterialComponent {

  @Input()
  public title = '';

  @Input()
  public subTitle = '';

  @Input()
  public hasMenu = false;

  constructor() { }

}
