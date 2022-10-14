/* Ejercicio 3:
Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos, una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede. */

class DispositivoDeAudioMP3 {
  private marca: string;
  private modelo: string;
  private tipoDeBaterias: string;
  private cantidadDeBaterias: number;
  private pistaActual: number;
  private instantePistaActual: number;
  constructor(
    marca: string,
    modelo: string,
    tipoDeBaterias: string,
    cantidadDeBaterias: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.tipoDeBaterias = tipoDeBaterias;
    this.cantidadDeBaterias = cantidadDeBaterias;
    this.pistaActual = 0;
    this.instantePistaActual = 0;
  }

  play(): void {}

  pause(): void {}

  stop(): void {}

  fwd(): void {}

  rwd(): void {}

  nextTrack(): void {}

  prevTrack(): void {}

  turnOnOff(): void {}
}

class Discman extends DispositivoDeAudioMP3 {
  reproduceCDS: boolean;

  constructor(
    marca: string,
    modelo: string,
    tipoDeBaterias: string,
    cantidadDeBaterias: number
  ) {
    super(marca, modelo, tipoDeBaterias, cantidadDeBaterias);
    this.reproduceCDS = true;
  }

  open(): void {}
}

let miMP3: DispositivoDeAudioMP3 = new DispositivoDeAudioMP3(
  "Apple",
  "iPod shuffle",
  "AAA",
  2
);
