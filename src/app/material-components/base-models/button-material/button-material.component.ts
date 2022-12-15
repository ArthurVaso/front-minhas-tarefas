import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-material',
  templateUrl: './button-material.component.html',
  styleUrls: ['./button-material.component.scss']
})
export class ButtonMaterialComponent implements OnInit {

  @Input()
  public widthPx = '0';

  @Input()
  public bgColor = 'white';

  @Input()
  public textColor = 'black';

  @Input()
  public width: '25' | '50' | '75' | '100' = '100';

  @Input()
  public height: number = 20;

  @Input()
  public value: string = '';

  @Input()
  public disabled = false;

  @Output()
  public clickDuenDinDin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.clickDuenDinDin.emit();
  }

}
