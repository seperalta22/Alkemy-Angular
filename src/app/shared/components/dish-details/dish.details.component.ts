import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dish-details.component.html',
  styles: [],
})
export class DishDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DishDetailsComponent>
  ) {}

  getBoolean(value: boolean): string {
    return value ? 'si' : 'no';
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
