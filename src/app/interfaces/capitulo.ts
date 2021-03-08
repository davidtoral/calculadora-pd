import { Articulo } from './articulo';

export interface Capitulo {
  num: number;
  titulo: string;
  articulos: Articulo[];
}
