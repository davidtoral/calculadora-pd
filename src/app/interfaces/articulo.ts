export interface Articulo {
  seleccionado: boolean;
  articulo: string;
  titulo: string;
  puntos: number;
  multa: number;
  condena: number;
  calabozos: boolean;
  prevalece: string[];
  extra?: string;
}
