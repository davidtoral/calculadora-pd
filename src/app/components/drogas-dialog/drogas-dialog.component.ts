import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-drogas-dialog',
  templateUrl: './drogas-dialog.component.html',
  styleUrls: ['./drogas-dialog.component.scss']
})
export class DrogasDialogComponent implements OnInit {

  drogasMulta = [];

  constructor(
    private articulosService: ArticulosService,
    public dialogRef: MatDialogRef<DrogasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.drogasMulta = this.articulosService.getDrogas();
  }

  dismiss(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.drogasMulta.forEach(droga => {
      if (droga.cantidad >= 4) {
        this.data.art.calabozos = true;
      }

      this.data.art.multa += droga.multa * droga.cantidad;
    });

    this.dialogRef.close(this.data.art);
  }

}
