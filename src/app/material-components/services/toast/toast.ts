import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface ToastParams {
    message: string,
    horizontalPosition?: MatSnackBarHorizontalPosition;
    verticalPosition?: MatSnackBarVerticalPosition;
    duration?: number;
    type?: 'danger' | 'success' | 'warning'
}