import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Component({
  selector: 'duendindin-input-date-material',
  templateUrl: './input-date-material.component.html',
  styleUrls: ['./input-date-material.component.scss']
})
export class InputDateMaterialComponent implements OnInit {

  @Input()
  public width: '25' | '50' | '75' | '100' = '100';

  @Input()
  public required: 'required' | 'false' = 'false';

  @Input()
  public value = new Date();

  @Input()
  public label = 'Escolha uma data';

  @Output()
  public valueChange = new EventEmitter<Date>();

  public date$ = new BehaviorSubject<any>(this.value);

  mask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  onChangeValue(teste: any, picker: any) {


    this.valueChange.emit(this.value);
  }

  constructor() { }

  ngOnInit(): void {
    this.date$
      .pipe(debounceTime(700))
      .subscribe(value => {

        const valueAny = value as any;

        if(!(valueAny instanceof Date) && value?.length >= 9) {

          if(value.length == 9) {
            this.value = moment(value[5] + value[6] + value[7] + value[8] + '-0' + value[3] + '-' + value[0] + value[1]).toDate();
          }

          if(value.length == 10) {

            this.value = moment(value[6] + value[7] + value[8] + value[9] + '-' + value[3] + value[4] + '-' + value[0] + value[1]).toDate();
          }
        }

        this.valueChange.emit(this.value);

      });
  }

}

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
