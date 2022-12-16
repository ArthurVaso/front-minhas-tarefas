import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordMaterialComponent } from './input-password-material.component';

describe('InputPasswordMaterialComponent', () => {
  let component: InputPasswordMaterialComponent;
  let fixture: ComponentFixture<InputPasswordMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPasswordMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPasswordMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
