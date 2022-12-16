import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateMaterialComponent } from './input-date-material.component';

describe('InputDateMaterialComponent', () => {
  let component: InputDateMaterialComponent;
  let fixture: ComponentFixture<InputDateMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDateMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
