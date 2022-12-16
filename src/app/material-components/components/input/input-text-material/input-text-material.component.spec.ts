import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextMaterialComponent } from './input-text-material.component';

describe('InputTextMaterialComponent', () => {
  let component: InputTextMaterialComponent;
  let fixture: ComponentFixture<InputTextMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
