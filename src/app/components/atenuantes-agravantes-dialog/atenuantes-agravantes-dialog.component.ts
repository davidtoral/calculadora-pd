import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-atenuantes-agravantes-dialog',
  templateUrl: './atenuantes-agravantes-dialog.component.html',
  styleUrls: ['./atenuantes-agravantes-dialog.component.scss']
})
export class AtenuantesAgravantesDialogComponent implements OnInit {

  atenuantes = [];
  agravantes = [];
  seleccionado: any;

  constructor(
    private articulosService: ArticulosService,
    public dialogRef: MatDialogRef<AtenuantesAgravantesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.atenuantes = this.articulosService.getAtenuantes();
    this.agravantes = this.articulosService.getAgravantes();
  }

  dismiss(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.seleccionado)
  }

}
