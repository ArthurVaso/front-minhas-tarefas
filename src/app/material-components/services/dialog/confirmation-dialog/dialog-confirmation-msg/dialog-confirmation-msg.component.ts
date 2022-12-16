import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-confirmation-msg',
  templateUrl: './dialog-confirmation-msg.component.html',
  styleUrls: ['./dialog-confirmation-msg.component.scss']
})
export class DialogConfirmationMsgComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogConfirmationMsgComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onClickYes() {
    if(this.data.actionYes) {
      this.data.actionYes();
    }
    this.dialogRef.close();
  }

  onClickNo() {
    if(this.data.actionNo) {
      this.data.actionNo();
    }
    this.dialogRef.close();
  }

}
