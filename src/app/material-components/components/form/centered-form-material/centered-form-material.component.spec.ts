import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredFormMaterialComponent } from './centered-form-material.component';

describe('CenteredFormMaterialComponent', () => {
  let component: CenteredFormMaterialComponent;
  let fixture: ComponentFixture<CenteredFormMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredFormMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
