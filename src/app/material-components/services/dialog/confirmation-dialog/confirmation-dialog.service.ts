import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationMsgComponent } from './dialog-confirmation-msg/dialog-confirmation-msg.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(msg: string, actionYes?: () => void, actionNo?: () => void) {
    this.dialog.open(DialogConfirmationMsgComponent, {
      width: '400px',
      data: {
        actionYes,
        actionNo,
        msg
      }
    });
  }

}
