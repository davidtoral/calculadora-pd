import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-desglose-dialog',
  templateUrl: './desglose-dialog.component.html',
  styleUrls: ['./desglose-dialog.component.scss']
})
export class DesgloseDialogComponent {

  columnas: string[] = ['articulo', 'titulo', 'puntos', 'multa', 'condena', 'fianza'];
  articulos: Articulo[] = [];
  fianzas: string[] = [];

  constructor(
    private articulosService: ArticulosService,
    public dialogRef: MatDialogRef<DesgloseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.articulos = data.articulos;
      this.fianzas = articulosService.getFianzas();
    }

  dismiss(): void {
    this.dialogRef.close();
  }

  tieneFianza(articulo: Articulo): boolean {
    return this.fianzas.includes(articulo.articulo);
  }

}
