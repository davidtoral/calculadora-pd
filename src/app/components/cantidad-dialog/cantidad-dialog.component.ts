import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cantidad-dialog',
  templateUrl: './cantidad-dialog.component.html',
  styleUrls: ['./cantidad-dialog.component.scss']
})
export class CantidadDialogComponent {

  cantidad: number = 1;

  constructor(
    public dialogRef: MatDialogRef<CantidadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dismiss(): void {
    this.dialogRef.close();
  }

}
