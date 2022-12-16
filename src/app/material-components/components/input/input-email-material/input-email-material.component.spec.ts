import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailMaterialComponent } from './input-email-material.component';

describe('InputEmailMaterialComponent', () => {
  let component: InputEmailMaterialComponent;
  let fixture: ComponentFixture<InputEmailMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmailMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEmailMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
