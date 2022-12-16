import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxMaterialComponent } from './input-checkbox-material.component';

describe('InputCheckboxMaterialComponent', () => {
  let component: InputCheckboxMaterialComponent;
  let fixture: ComponentFixture<InputCheckboxMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCheckboxMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCheckboxMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
