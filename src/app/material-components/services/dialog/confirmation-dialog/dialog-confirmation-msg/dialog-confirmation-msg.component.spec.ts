import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationMsgComponent } from './dialog-confirmation-msg.component';

describe('DialogConfirmationMsgComponent', () => {
  let component: DialogConfirmationMsgComponent;
  let fixture: ComponentFixture<DialogConfirmationMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmationMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
