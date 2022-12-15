import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDefaultMaterialComponent } from './button-default-material.component';

describe('ButtonDefaultMaterialComponent', () => {
  let component: ButtonDefaultMaterialComponent;
  let fixture: ComponentFixture<ButtonDefaultMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDefaultMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDefaultMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
