import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaMaterialComponent } from './textarea-material.component';

describe('TextareaMaterialComponent', () => {
  let component: TextareaMaterialComponent;
  let fixture: ComponentFixture<TextareaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
