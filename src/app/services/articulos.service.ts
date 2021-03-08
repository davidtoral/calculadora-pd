import { Injectable } from '@angular/core';
import { Capitulo } from '../interfaces/capitulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  getFianzas(): string[] {
    return ['2.1', '2.2', '2.3', '2.6', '2.7', '2.8', '2.15', '2.16', '3.1', '3.2', '4.1', '4.2', '4.3', '4.5', '4.6', '5.1', '5.2', '5.3', '6.7', '7.1', '8.7', '8.10', '8.12', '8.13', '8.14'];
  }

  getAtenuantes(): any[] {
    return [
      {
        num: 1,
        titulo: 'Actuar bajo los efectos de sustancias ilícitas (drogas en general) o alcohol a causa de su grave adicción o por algún tipo de enfermedad.',
        atenuante: 1 / 3
      },
      {
        num: 2,
        titulo: 'Confesión del delito durante el procesamiento y hasta antes del cumplimiento de la condena.',
        atenuante: 1 / 3
      },
      {
        num: 3,
        titulo: 'Confesión del delito antes de su detención y por propia voluntad.',
        atenuante: 1 / 2
      },
      {
        num: 4,
        titulo: 'La de haber procedido el culpable a reparar el daño ocasionado a la víctima, o disminuir sus efectos, en cualquier momento del procedimiento y con anterioridad al cumplimiento de la pena.',
        atenuante: 1 / 2
      },
      {
        num: 5,
        titulo: 'No poseer antecedentes penales, exceptuando los del capitulo 1 y 7.',
        atenuante: 1 / 2
      },
      {
        num: 6,
        titulo: 'Buena cooperación y conducta durante el arresto y procesamiento.',
        atenuante: 1 / 2
      },
      {
        num: 7,
        titulo: 'Tener el acusado menos de 18 años, siempre que no se cometan en delitos contra el estado (Cap. 9) o asesinato en los cuales no sera aplicable este atenuante.',
        atenuante: 1 / 2
      },
      {
        num: 8,
        titulo: 'Parentesco: Relación familiar con la víctima demostrable.',
        atenuante: 1 / 2
      }
    ];
  }

  getAgravantes(): any[] {
    return [
      {
        num: 1,
        titulo: 'Ejecutar el hecho con alevosía.',
        agravante: 4
      },
      {
        num: 2,
        titulo: 'Ejecutar el hecho mediante disfraz, con abuso de superioridad o aprovechando las circunstancias de lugar, tiempo o auxilio de otras personas que debiliten la defensa del ofendido o faciliten la impunidad del delincuente.',
        agravante: 4
      },
      {
        num: 3,
        titulo: 'Ejecutar el hecho mediante precio, recompensa o promesa.',
        agravante: 2
      },
      {
        num: 4,
        titulo: 'Cometer el delito por motivos racistas, antisemitas u otra clase de discriminación referente a la ideología, religión o creencias de la víctima, la etnia, raza o nación a la que pertenezca, su sexo, orientación o identidad sexual, razones de género, la enfermedad que padezca o su discapacidad.',
        agravante: 4
      },
      {
        num: 5,
        titulo: 'Obrar con abuso de confianza.',
        agravante: 2
      },
      {
        num: 6,
        titulo: 'Prevalerse del carácter público que tenga el culpable.',
        agravante: 2
      },
      {
        num: 7,
        titulo: 'Ser reincidente.',
        agravante: 5
      },
      {
        num: 8,
        titulo: 'Prevalimiento.',
        agravante: 4
      }
    ];
  }

  getArmas(): any[] {
    return [
      {
        arma: 'Armas punzantes que superen las medidas legales',
        multa: 450,
        carcel: false,
        cantidad: 0
      },
      {
        arma: 'Puño americano',
        multa: 500,
        carcel: false,
        cantidad: 0
      },
      {
        arma: 'Pistola',
        multa: 1200,
        carcel: true,
        cantidad: 0
      },
      {
        arma: 'Desert Eagle',
        multa: 1800,
        carcel: true,
        cantidad: 0
      },
      {
        arma: 'TEC-9/MAC-10',
        multa: 1800,
        carcel: true,
        cantidad: 0
      },
      {
        arma: 'Escopetas',
        multa: 2000,
        carcel: true,
        cantidad: 0
      },
      {
        arma: 'AK47/M4',
        multa: 4000,
        carcel: true,
        cantidad: 0
      }
    ];
  }

  getDrogas(): any[] {
    return [
      {
        droga: 'Marihuana',
        multa: 200,
        cantidad: 0
      },
      {
        droga: 'LSD',
        multa: 300,
        cantidad: 0
      },
      {
        droga: 'Cocaína',
        multa: 400,
        cantidad: 0
      },
      {
        droga: 'Hachís',
        multa: 500,
        cantidad: 0
      },
      {
        droga: 'Heroína',
        multa: 600,
        cantidad: 0
      },
      {
        droga: 'PCP',
        multa: 700,
        cantidad: 0
      },
      {
        droga: 'Éxtasis',
        multa: 800,
        cantidad: 0
      },
      {
        droga: 'Crack',
        multa: 900,
        cantidad: 0
      },
      {
        droga: 'Metanfetamina',
        multa: 1000,
        cantidad: 0
      }
    ];
  }

  getCapitulos(): Capitulo[] {
    return [
      {
        num: 1,
        titulo: 'De las leyes de circulación',
        articulos: [
          {
            seleccionado: false,
            articulo: '1.1',
            titulo: 'Conducción temeraria',
            multa: 4000,
            condena: 0,
            calabozos: false,
            puntos: 3,
            prevalece: ['1.3', '1.4', '1.8', '1.12', '1.13', '1.15', '1.16', '1.17', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25']
          },
          {
            seleccionado: false,
            articulo: '1.2',
            titulo: 'Daños a la propiedad privada o pública',
            multa: 1500,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.3',
            titulo: 'Ignorar semáforos',
            multa: 500,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: [],
            extra: 'multiplicador'
          },
          {
            seleccionado: false,
            articulo: '1.4',
            titulo: 'Dirección contraria',
            multa: 400,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.5',
            titulo: 'Conducir bajo efectos de sustancias alucinógenas',
            multa: 600,
            condena: 0,
            calabozos: false,
            puntos: 6,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.6',
            titulo: 'Posesión de elementos ilícitos en un vehículo',
            multa: 0,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.7',
            titulo: 'Conducir bajo los efectos del alcohol',
            multa: 800,
            condena: 0,
            calabozos: false,
            puntos: 6,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.8',
            titulo: 'Exceso de velocidad',
            multa: 700,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.9',
            titulo: 'Conducción sin una licencia (Carne) de conducir o con una falsificada',
            multa: 2500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.10',
            titulo: 'Participación en carreras ilícitas',
            multa: 4000,
            condena: 1,
            calabozos: false,
            puntos: 12,
            prevalece: ['1.1', '1.3', '1.4', '1.8', '1.12', '1.13', '1.15', '1.16', '1.17', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25']
          },
          {
            seleccionado: false,
            articulo: '1.11',
            titulo: 'Mal estacionamiento',
            multa: 250,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.12',
            titulo: 'Obstrucción de tráfico',
            multa: 900,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.13',
            titulo: 'No ceder el paso a los servicios de emergencia',
            multa: 500,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.14',
            titulo: 'No portar los elementos de seguridad',
            multa: 450,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.15',
            titulo: 'Conducir un vehículo en mal estado',
            multa: 400,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.16',
            titulo: 'Arrojar a la vía o en sus inmediaciones objetos',
            multa: 600,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.17',
            titulo: 'Ignorar señales de tránsito viales',
            multa: 200,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.18',
            titulo: 'Realizar adelantamientos indebidos',
            multa: 500,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.19',
            titulo: 'Dar media vuelta a un vehículo en la vía',
            multa: 350,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.20',
            titulo: 'Ignorar las señales de los agentes que regulan la circulación',
            multa: 400,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.21',
            titulo: 'Conducir bajo distracción',
            multa: 250,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.22',
            titulo: 'Realizar un cambio de sentido erróneo',
            multa: 250,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.23',
            titulo: 'Giro indebido',
            multa: 250,
            condena: 0,
            calabozos: false,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.24',
            titulo: 'Conducir por fuera de la calzada',
            multa: 350,
            condena: 0,
            calabozos: false,
            puntos: 2,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.25',
            titulo: 'Uso indebido del claxon',
            multa: 100,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.26',
            titulo: 'Omisión del deber de socorro',
            multa: 4000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.27',
            titulo: 'Ser un peligro para la circulación',
            multa: 6000,
            condena: 0,
            calabozos: true,
            puntos: 12,
            prevalece: ['1.1', '1.3', '1.4', '1.8', '1.12', '1.13', '1.15', '1.16', '1.17', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25']
          },
          {
            seleccionado: false,
            articulo: '1.28',
            titulo: 'No respetar las normativas sobre vuelo',
            multa: 6500,
            condena: 0,
            calabozos: false,
            puntos: 12,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.29',
            titulo: 'Uso de suspensión hidráulica',
            multa: 400,
            condena: 0,
            calabozos: true,
            puntos: 1,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.30',
            titulo: 'Circular sin Matricula',
            multa: 5500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.31',
            titulo: 'Pasos de Cebra',
            multa: 450,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '1.32',
            titulo: 'Accidente y fuga',
            multa: 1500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 2,
        titulo: 'De las agresiones, los disturbios y las conductas erróneas',
        articulos: [
          {
            seleccionado: false,
            articulo: '2.1',
            titulo: 'Disturbios en la vía pública',
            multa: 2000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.2',
            titulo: 'Agresión',
            multa: 2800,
            condena: 1,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.1']
          },
          {
            seleccionado: false,
            articulo: '2.3',
            titulo: 'Alteración del orden público',
            multa: 0,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.4',
            titulo: 'Prostitución en la vía publica',
            multa: 1500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.5',
            titulo: 'Comercialización ilegal',
            multa: 3000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.6',
            titulo: 'Conducta desenfrenada',
            multa: 5000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: ['2.3']
          },
          {
            seleccionado: false,
            articulo: '2.7',
            titulo: 'Inducir al delito',
            multa: 0,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.8',
            titulo: 'Implicación en una organización ilegal',
            multa: 0,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.7']
          },
          {
            seleccionado: false,
            articulo: '2.9',
            titulo: 'Intento de violación',
            multa: 0,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.13']
          },
          {
            seleccionado: false,
            articulo: '2.10',
            titulo: 'Intento de violación a un menor de edad',
            multa: 0,
            condena: 6,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.11',
            titulo: 'Violación',
            multa: 0,
            condena: 6,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.9']
          },
          {
            seleccionado: false,
            articulo: '2.12',
            titulo: 'Violación a un menor de edad',
            multa: 0,
            condena: 8,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.10', '2.13']
          },
          {
            seleccionado: false,
            articulo: '2.13',
            titulo: 'Abuso de menores',
            multa: 4000,
            condena: 4,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.14',
            titulo: 'Racismo',
            multa: 1000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.15',
            titulo: 'Suplantación de identidad',
            multa: 2000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '2.16',
            titulo: 'Acoso psicológico',
            multa: 2000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          }
        ],
      },
      {
        num: 3,
        titulo: 'De los hurtos y los asaltos',
        articulos: [
          {
            seleccionado: false,
            articulo: '3.1',
            titulo: 'Allanamiento de morada',
            multa: 3500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '3.2',
            titulo: 'Posesión ilícita de propiedad privada',
            multa: 6500,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: ['3.1']
          },
          {
            seleccionado: false,
            articulo: '3.3',
            titulo: 'Asalto a mano armada a través de armas blancas',
            multa: 2000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '3.4',
            titulo: 'Asalto a mano armada a través de armas de fuego',
            multa: 9000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '3.5',
            titulo: 'Robo de un vehículo con el uso de la fuerza',
            multa: 7000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '3.6',
            titulo: 'Daños a la propiedad privada o estatal',
            multa: 4000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '3.7',
            titulo: 'Robo de un vehículo sin el uso de la fuerza',
            multa: 5000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 4,
        titulo: 'De las armas de fuego y su porte',
        articulos: [
          {
            seleccionado: false,
            articulo: '4.1',
            titulo: 'Posesión ilegal de armas',
            multa: 0,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: [],
            extra: 'armas'
          },
          {
            seleccionado: false,
            articulo: '4.2',
            titulo: 'Posesión de armas ilícitas con intención de contrabando',
            multa: 6000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: ['4.1'],
            extra: 'armas'
          },
          {
            seleccionado: false,
            articulo: '4.3',
            titulo: 'Tráfico de armas',
            multa: 9000,
            condena: 5,
            calabozos: false,
            puntos: 0,
            prevalece: ['4.1', '4.2']
          },
          {
            seleccionado: false,
            articulo: '4.4',
            titulo: 'Mostrar el arma de fuego en público sin salvoconducto',
            multa: 0,
            condena: 1,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '4.5',
            titulo: 'Mostrar el arma de fuego en público con salvoconducto',
            multa: 0,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '4.6',
            titulo: 'Compra de armas ilícitas',
            multa: 0,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 5,
        titulo: 'De los narcóticos y su consumo',
        articulos: [
          {
            seleccionado: false,
            articulo: '5.1',
            titulo: 'Posesión de sustancias ilícitas con intención de contrabando',
            multa: 0,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: [],
            extra: 'drogas'
          },
          {
            seleccionado: false,
            articulo: '5.2',
            titulo: 'Tráfico de drogas',
            multa: 8000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: ['5.1']
          },
          {
            seleccionado: false,
            articulo: '5.3',
            titulo: 'Compra de sustancias ilícitas',
            multa: 0,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '5.5',
            titulo: 'Consumo de sustancias ilícitas',
            multa: 3500,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 6,
        titulo: 'De los homicidios, secuestros y extorsiones',
        articulos: [
          {
            seleccionado: false,
            articulo: '6.1',
            titulo: 'Intento de homicidio sin el uso de armas',
            multa: 0,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2']
          },
          {
            seleccionado: false,
            articulo: '6.2',
            titulo: 'Intento de homicidio a mano armada',
            multa: 0,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2']
          },
          {
            seleccionado: false,
            articulo: '6.3',
            titulo: 'Homicidio sin el uso de armas',
            multa: 0,
            condena: 4,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '6.4',
            titulo: 'Homicidio a mano armada',
            multa: 0,
            condena: 5,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '6.5',
            titulo: 'Homicidio múltiple',
            multa: 10000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: ['6.3', '6.4'],
            extra: 'multiplicador'
          },
          {
            seleccionado: false,
            articulo: '6.6',
            titulo: 'Secuestro',
            multa: 0,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '6.7',
            titulo: 'Extorsión',
            multa: 2000,
            condena: 1,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '6.8',
            titulo: 'Extorsión a negocios/empresas/entidades',
            multa: 4000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 7,
        titulo: 'De los delitos de documentos y licencias',
        articulos: [
          {
            seleccionado: false,
            articulo: '7.1',
            titulo: 'Falsificación de documentos',
            multa: 4000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '7.2',
            titulo: 'Posesión de un documento falso',
            multa: 2000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '7.3',
            titulo: 'Transitar indocumentado',
            multa: 1500,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '7.4',
            titulo: 'Pescar sin salvoconducto',
            multa: 3000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '7.5',
            titulo: 'Cazar sin salvoconducto',
            multa: 3500,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          }
        ]
      },
      {
        num: 8,
        titulo: 'De los delitos contra el Estado',
        articulos: [
          {
            seleccionado: false,
            articulo: '8.1',
            titulo: 'Desobediencia a la justicia',
            multa: 2000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.2',
            titulo: 'Falso reporte de bomba',
            multa: 9000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.3',
            titulo: 'Allanamiento de edificios/instalaciones públicas',
            multa: 4000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.4',
            titulo: 'Uso indebido de la línea de emergencias',
            multa: 1000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.5',
            titulo: 'Robo de elementos estatales',
            multa: 10000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.6',
            titulo: 'Hurto de elementos estatale',
            multa: 6000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.7',
            titulo: 'Robo de armamento estatal',
            multa: 7000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.8',
            titulo: 'Hurto de armamento estatal',
            multa: 6000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.9',
            titulo: 'Suplantación de identidad',
            multa: 15000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.10',
            titulo: 'Resistirse al arresto',
            multa: 2000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.11',
            titulo: 'Evadir un arresto (evasión)',
            multa: 3000,
            condena: 0,
            calabozos: true,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.12',
            titulo: 'Huir de la justicia',
            multa: 3000,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: ['1.1', '1.3', '1.4', '1.8', '1.12', '1.13', '1.15', '1.16', '1.17', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25']
          },
          {
            seleccionado: false,
            articulo: '8.12a',
            titulo: 'Huir de la justicia (agravado por injustificación/provocativa)',
            multa: 3000,
            condena: 6,
            calabozos: false,
            puntos: 0,
            prevalece: ['1.1', '1.3', '1.4', '1.8', '1.12', '1.13', '1.15', '1.16', '1.17', '1.18', '1.19', '1.21', '1.22', '1.23', '1.24', '1.25', '8.12']
          },
          {
            seleccionado: false,
            articulo: '8.13',
            titulo: 'Soborno',
            multa: 8000,
            condena: 3,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.14',
            titulo: 'Intento de soborno',
            multa: 4500,
            condena: 1,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.15',
            titulo: 'Intento de homicidio sin el uso de armas',
            multa: 0,
            condena: 4,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2', '6.1']
          },
          {
            seleccionado: false,
            articulo: '8.16',
            titulo: 'Intento de homicidio a mano armada',
            multa: 0,
            condena: 5,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2', '6.2']
          },
          {
            seleccionado: false,
            articulo: '8.17',
            titulo: 'Homicidio sin el uso de armas',
            multa: 0,
            condena: 6,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2', '6.3']
          },
          {
            seleccionado: false,
            articulo: '8.18',
            titulo: 'Homicidio a mano armada',
            multa: 10000,
            condena: 7,
            calabozos: false,
            puntos: 0,
            prevalece: ['2.2', '6.4']
          },
          {
            seleccionado: false,
            articulo: '8.19',
            titulo: 'Terrorismo',
            multa: 500000,
            condena: 0,
            calabozos: false,
            puntos: 0,
            prevalece: []
          },
          {
            seleccionado: false,
            articulo: '8.20',
            titulo: 'Agresión a un cargo público',
            multa: 0,
            condena: 2,
            calabozos: false,
            puntos: 0,
            prevalece: []
          }
        ]
      }
    ];
  }
}
