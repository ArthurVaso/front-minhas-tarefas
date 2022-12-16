import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFormMaterialComponent } from './button-form-material.component';

describe('ButtonFormMaterialComponent', () => {
  let component: ButtonFormMaterialComponent;
  let fixture: ComponentFixture<ButtonFormMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFormMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
