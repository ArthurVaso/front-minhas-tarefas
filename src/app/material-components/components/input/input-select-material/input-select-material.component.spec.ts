import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectMaterialComponent } from './input-select-material.component';

describe('InputSelectMaterialComponent', () => {
  let component: InputSelectMaterialComponent;
  let fixture: ComponentFixture<InputSelectMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSelectMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
