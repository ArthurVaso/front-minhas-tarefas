import { Directive, Inject, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDateFormat, DateDisplay, DateParse } from './input-date-material';

@Directive({
  selector: '[datePickerFormat]',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useClass: CustomDateFormat
    }
  ]
})
export class InputDateMaterialDirective {

  @Input() public configDateParse = {} as DateParse;
  @Input() public configDateDisplay = {} as DateDisplay;

  @Input("datePickerFormat")
  set datePickerFormat(format: string) {
    if (this.configDateParse) {
      this.matDateFormat.updateDateFormat(
        this.configDateParse,
        this.configDateDisplay
      );
    } else {
      this.matDateFormat.updateDateFormat({ dateInput: format });
    }

    const value = this.ngControl.value;
    this.ngControl.valueAccessor?.writeValue(value);
  }

  constructor(
    @Inject(MAT_DATE_FORMATS) public matDateFormat: CustomDateFormat,
    @Optional() private ngControl: NgControl
  ) {}
}


