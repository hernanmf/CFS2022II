import * as fs from "fs";

class RegistroAutomotor {
  private listaAutomotor: Auto[];

  poblarRegistro() {}
}

class Auto {
  public marca: string;
  public modelo: string;
  private segmento: string;
  private potencia: number;

  constructor(
    marca: string,
    modelo: string,
    segmento: string,
    potencia: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.segmento = segmento;
    this.potencia = potencia;
  }
}

class GestorDeArchivos {
  private arregloString: string[];

  constructor(txtFileLocation: string) {
    let archivoTxt: string = fs.readFileSync(txtFileLocation, "utf-8");
    this.arregloString = archivoTxt.split(";");
  }

  public mostrarArreglo(): void {
    console.log(this.arregloString);
  }

  public getArregloString(): string[] {
    return this.arregloString;
  }
}

/* Inicio del script */
let miAutito: Auto = new Auto(`Fiat`, `Punto`, `Hatchback`, 99);
