import { Component, Input } from '@angular/core';
import { InputMaterialComponent } from 'src/app/material-components/base-models/input-material/input-material.component';

@Component({
  selector: 'textarea-material',
  templateUrl: './textarea-material.component.html',
  styleUrls: ['./textarea-material.component.scss']
})
export class TextareaMaterialComponent extends InputMaterialComponent {

  @Input()
  public maxLength = 255;

  @Input()
  public minLength = 0;

  @Input()
  public resize: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit' = 'none';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
