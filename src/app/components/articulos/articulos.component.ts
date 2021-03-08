import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { captureRejectionSymbol } from 'events';
import { Articulo } from 'src/app/interfaces/articulo';
import { Capitulo } from 'src/app/interfaces/capitulo';
import { ArticulosService } from 'src/app/services/articulos.service';
import { ArmasDialogComponent } from '../armas-dialog/armas-dialog.component';
import { AtenuantesAgravantesDialogComponent } from '../atenuantes-agravantes-dialog/atenuantes-agravantes-dialog.component';
import { CantidadDialogComponent } from '../cantidad-dialog/cantidad-dialog.component';
import { DesgloseDialogComponent } from '../desglose-dialog/desglose-dialog.component';
import { DrogasDialogComponent } from '../drogas-dialog/drogas-dialog.component';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  capitulos: Capitulo[] = [];
  fianzas: string[] = [];
  prevaleceArray: string[] = [];
  searchText = '';
  atenuanteOAgravante: any;
  expandidos = false;
  cardHeight: number;
  bodyWidth: number;

  constructor(private articulosService: ArticulosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.capitulos = this.articulosService.getCapitulos();
    this.fianzas = this.articulosService.getFianzas();
  }

  // Comprobar si el artículo tiene algún extra
  comprobarExtras(articulo: Articulo, i: number, j: number): void {
    this.capitulos[i].articulos[j] = this.articulosService.getCapitulos()[i].articulos[j]; // Restablecer el artículo desde el servicio para evitar datos erróneos por los multiplicadores
    articulo = this.capitulos[i].articulos[j];
    articulo.seleccionado = true;

    if (articulo.extra === 'multiplicador') { // Multiplicador
      const dialogRef = this.dialog.open(CantidadDialogComponent, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          articulo.multa *= result;
          articulo.condena *= result;
          articulo.puntos *= result;
        } else {
          articulo.seleccionado = false;
        }
      });
    } else if (articulo.extra === 'armas') { // Armas
      const dialogRef = this.dialog.open(ArmasDialogComponent, {
        width: '400px',
        data: {
          art: articulo
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          articulo = result;
        } else {
          articulo.seleccionado = false;
        }
      });
    } else if (articulo.extra === 'drogas') { // Drogas
      const dialogRef = this.dialog.open(DrogasDialogComponent, {
        width: '400px',
        data: {
          art: articulo
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          articulo = result;
        } else {
          articulo.seleccionado = false;
        }
      });
    }
  }

  desmarcarPrevalece(articuloParam: Articulo, i: number, j: number): void {
    setTimeout(() => {
      this.prevaleceArray = [];

      // Añadir todos los articulos que prevalecen al array
      this.capitulos.forEach(capitulo => {
        capitulo.articulos.forEach(articulo => {
          if (articulo.seleccionado) {
            this.prevaleceArray.push(...articulo.prevalece);
          }
        });
      });

      // Deseleccionar los articulos que prevalecen (aquellos contenidos en prevaleceArray)
      this.capitulos.forEach(capitulo => {
        capitulo.articulos.forEach(articulo => {
          if (articulo.seleccionado) {
            if (this.comprobarPrevalece(articulo)) {
              articulo.seleccionado = false;
            }
          }
        });
      });

      if (articuloParam.extra && articuloParam.seleccionado) {
        this.comprobarExtras(articuloParam, i, j);
      }
    });
  }

  // Comprobar si un artículo prevalece
  comprobarPrevalece(articulo: Articulo): boolean {
    return this.prevaleceArray.includes(articulo.articulo);
  }

  // Devuelve la suma total de una propiedad pasada por parámetros
  getTotal(tipo: string): number {
    let multa = 0;

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(
        articulo => {
          if (articulo.seleccionado) {
            multa += articulo[tipo];
          }
        }
      );
    });

    return this.atenuanteOAgravante && tipo !== 'puntos' ? this.getTotalConAtenuanteOAgravante(multa) : multa;
  }

  // Devuelve la suma total de una multa teniendo el cuenta el atenuante o agravante
  getTotalConAtenuanteOAgravante(multa: number): number {
    let total = multa;

    if (this.atenuanteOAgravante.atenuante) {
      total = multa * this.atenuanteOAgravante.atenuante;
    } else if (this.atenuanteOAgravante.agravante) {
      total = multa / this.atenuanteOAgravante.agravante + multa;
    }

    return Math.round( ( total + Number.EPSILON ) * 100 ) / 100; // Redondear 2 decimales
  }

  // Comprobar si hay calabozos en los artículos seleccionados
  tieneCalabozos(): boolean {
    let calabozos = false;

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (articulo.seleccionado && articulo.calabozos) {
          calabozos = true;
        }
      });
    });

    return calabozos;
  }

  // Comprobar si a pesar de pagar fianza, tendrá que pasar por calabozos o no
  tieneCalabozosConFianza(): boolean {
    let calabozos = false;

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (articulo.seleccionado && articulo.calabozos && !this.tieneFianza(articulo)) {
          calabozos = true;
        }
      });
    });

    return calabozos;
  }

  // Devuelve un string con los articulos seleccionados
  getSeleccionados(): string {
    let articulos = '';

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (articulo.seleccionado) {
          articulos += articulo.articulo + ', ';
        }
      });
    });

    if (articulos.length > 0) {
      articulos = articulos.slice(0, -2);
    }

    return articulos;
  }

  // Comprobar si un articulo tiene fianza
  tieneFianza(articulo: Articulo): boolean {
    return this.fianzas.includes(articulo.articulo);
  }

  // Comprobar la fianza de un articulo
  getFianzaArticulo(articulo: Articulo): number {
    const añoFianza = 10000;
    let total: number;
    let años = this.atenuanteOAgravante ? this.getTotalConAtenuanteOAgravante(articulo.condena) : articulo.condena;
    años = Math.trunc(años);
    total = años * añoFianza;

    return total;
  }

  // Comprobar el total de una multa aplicando fianza
  getTotalConFianza(): number {
    const añoFianza = 10000;
    let total = this.getTotal('multa');

    /*this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (this.tieneFianza(articulo) && articulo.seleccionado && !articulo.calabozos) {
          total += this.getFianzaArticulo(articulo);
        }
      });
    });*/

    let años = this.getTotal('condena') - this.getTotalAniosConFianza();
    años = Math.trunc(años);
    total += años * añoFianza;

    if (this.tieneCalabozos() && !this.tieneCalabozosConFianza()) {
      total += añoFianza;
    }

    return total;
  }

  // Comprobar el total de años aplicando fianza
  getTotalAniosConFianza(): number {
    let total = this.getTotal('condena');

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (this.tieneFianza(articulo) && articulo.seleccionado) {
          total -= this.atenuanteOAgravante ? this.getTotalConAtenuanteOAgravante(articulo.condena) : articulo.condena;
        }
      });
    });

    if (total < 0) {
      total = 0;
    }

    return total;
  }

  // Deseleccionar todos los articulos
  deseleccionarTodos(): void {
    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        articulo.seleccionado = false;
      });
    });

    this.prevaleceArray = [];
  }

  // Abrir el dialog para seleccionar atenuante o agravante
  openAtenuanteAgravanteDialog(): void {
    const dialogRef = this.dialog.open(AtenuantesAgravantesDialogComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.atenuanteOAgravante = result;
    });
  }

  // Abrir el dialog para ver el desglose de artículos seleccionados
  openDesgloseDialog(): void {
    let arts = [];

    this.capitulos.forEach(capitulo => {
      capitulo.articulos.forEach(articulo => {
        if (articulo.seleccionado) {
          arts.push(articulo);
        }
      });
    });

    const dialogRef = this.dialog.open(DesgloseDialogComponent, {
      width: '90%',
      data: {
        articulos: arts
      }
    });
  }

  // Expandir todos los capitulos
  expandirTodos(): void {
    this.expandidos = !this.expandidos;
  }

  cardResized(event: ResizedEvent) {
    this.cardHeight = event.newHeight;
  }

  bodyResized(event: ResizedEvent) {
    this.bodyWidth = event.newWidth;
  }
}
