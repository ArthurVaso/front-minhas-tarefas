import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRedirectMaterialComponent } from './button-redirect-material.component';

describe('ButtonRedirectMaterialComponent', () => {
  let component: ButtonRedirectMaterialComponent;
  let fixture: ComponentFixture<ButtonRedirectMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRedirectMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRedirectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
