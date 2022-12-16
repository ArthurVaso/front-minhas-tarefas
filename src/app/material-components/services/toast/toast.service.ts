import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { ToastParams } from './toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  open(toastParams: ToastParams) {
    
    this.snackBar.open(
      toastParams.message, undefined, {
      horizontalPosition: toastParams.horizontalPosition,
      verticalPosition: toastParams.verticalPosition,
      duration: (toastParams.duration || 2.5) * 1000,
      panelClass: [
        'snackbar-maior-altura',
        'mat-simple-snackbar',
        'my-3',
        toastParams.type ? 'bg-' + toastParams.type : 'bg-success'
      ]
    });
  }

  openSuccessToast(message: string) {
    this.open({
      message,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      type: 'success'
    })
  }

  openErrorToast(message: string, duration: number = 2.5) {
    this.open({
      message,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      type: 'danger',
      duration
    })
  }

}
