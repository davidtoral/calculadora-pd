import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-advertencia-dialog',
  templateUrl: './advertencia-dialog.component.html',
  styleUrls: ['./advertencia-dialog.component.scss']
})
export class AdvertenciaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdvertenciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  dismiss(): void {
    this.dialogRef.close();
  }

}
