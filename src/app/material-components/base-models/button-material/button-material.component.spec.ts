import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMaterialComponent } from './button-material.component';

describe('ButtonMaterialComponent', () => {
  let component: ButtonMaterialComponent;
  let fixture: ComponentFixture<ButtonMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
