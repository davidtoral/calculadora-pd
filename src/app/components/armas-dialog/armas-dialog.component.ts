import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-armas-dialog',
  templateUrl: './armas-dialog.component.html',
  styleUrls: ['./armas-dialog.component.scss']
})
export class ArmasDialogComponent implements OnInit {

  armasMulta = [];

  constructor(
    private articulosService: ArticulosService,
    public dialogRef: MatDialogRef<ArmasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.armasMulta = this.articulosService.getArmas();
  }

  dismiss(): void {
    this.dialogRef.close();
  }

  saveArmas(): void {
    this.armasMulta.forEach(arma => {
      if (arma.cantidad > 0) {
        if (arma.carcel) {
          this.data.art.condena = 2;
        }

        this.data.art.multa += arma.multa * arma.cantidad;
      }
    });

    this.dialogRef.close(this.data.art);
  }

}
