import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRecurrentPeriodMaterialComponent } from './input-recurrent-period-material.component';

describe('InputRecurrentPeriodMaterialComponent', () => {
  let component: InputRecurrentPeriodMaterialComponent;
  let fixture: ComponentFixture<InputRecurrentPeriodMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRecurrentPeriodMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRecurrentPeriodMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
