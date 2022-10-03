import * as fs from "fs";
import * as readFileSync from "readline-sync";
let readlineSync = require("readline-sync");

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

class Auto {
  private patente: string;
  readonly marca: string;
  readonly modelo: string;
  readonly tipo: string;
  private nroChasis: string;
  private nroMotor: string;
  private nombreTitular: string;
  private dni: number;

  constructor(
    patente: string,
    marca: string,
    modelo: string,
    tipo: string,
    nroChasis: string,
    nroMotor: string,
    nombreTitular: string,
    dni: number
  ) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.nroChasis = nroChasis;
    this.nroMotor = nroMotor;
    this.nombreTitular = nombreTitular;
    this.dni = dni;
  }
}

class RegistroAutomotor {
  private listaAutos: Auto[];

  constructor(listaAutos: Auto[]) {
    this.listaAutos = this.listaAutos;
  }

  public getListaAutos() {
    return this.listaAutos;
  }

  public mostrarRegistro() {
    console.log(this.listaAutos);
  }

  public setListaAutos(listaAutos: Auto[]) {
    this.listaAutos = listaAutos;
  }

  /* aca va el abm */
  public altaAuto(listaAutos: Auto[], auto: Auto) {
    listaAutos.push(auto);
  }

  public bajaAuto(listaAutos: Auto[], posicion: Number) {
    listaAutos.splice(Number(posicion), 1);
  } /* Splice borra elemento en la posicion dada y desplaza el resto en 1 para cubrir el borrado */

  public modificarAuto(listaDeAutos: Auto[], posicion: Number, auto: Auto) {
    listaAutos[Number(posicion)] = auto;
  } /* De la lista de coches modifica la posicion del array pisando el auto que tenia con el nuevo */
}

function altaAutoTxt(vehiculo: string, listaAutos: Auto[]): void {
  let datosVehiculo = vehiculo.split(",");
  let patente: string = datosVehiculo[0];
  let marca: string = datosVehiculo[1];
  let modelo: string = datosVehiculo[2];
  let tipo: string = datosVehiculo[3];
  let nroChasis: string = datosVehiculo[4];
  let nroMotor: string = datosVehiculo[5];
  let nombreTitular: string = datosVehiculo[6];
  let dni: number = Number(datosVehiculo[7]);
  let autoNuevo = new Auto(
    patente,
    marca,
    modelo,
    tipo,
    nroChasis,
    nroMotor,
    nombreTitular,
    dni
  );
  listaAutos.push(autoNuevo);
} //PREGUNTAR SI ESTA FUNCION NO DEBERIA IR EN LA CLASE RegistroAutomotor

function altaAutoIngresado() {
  let patente: string = readlineSync.question("ingrese patente del vehiculo: ");
  let marca: string = readlineSync.question("ingrese marca del vehiculo: ");
  let modelo: string = readlineSync.question("ingrese modelo del vehiculo: ");
  let tipo: string = readlineSync.question("ingrese el tipo del vehiculo: ");
  let nroChasis: string = readlineSync.question(
    "ingrese el numero de chasis del vehiculo: "
  );
  let nroMotor: string = readlineSync.question(
    "ingrese el numero de motor del vehiculo: "
  );
  let nombreTitular: string = readlineSync.question(
    "ingrese el nombre y apellido del titular del automovil: "
  );
  let dni: number = Number(
    readlineSync.question("ingrese el DNI del titular del automovil: ")
  );
  let autoNuevo = new Auto(
    patente,
    marca,
    modelo,
    tipo,
    nroChasis,
    nroMotor,
    nombreTitular,
    dni
  );
  return autoNuevo;
}

/* Inicio del script */
let autosRegistrados: GestorDeArchivos = new GestorDeArchivos(
  "autosRegistrados.txt"
);
let listaRegistrados: Auto[] = [];

/* de los datos en el archivo y se crea el arreglo de autos */

for (let i: number = 0; i < autosRegistrados.getArregloString().length; i++) {
  altaAutoTxt(autosRegistrados.getArregloString()[i], listaRegistrados);
}

/* Volcamos el listado tomado al registro y lo mostramos*/
let listaAutos = new RegistroAutomotor(listaRegistrados);
listaAutos.mostrarRegistro();

//alta
listaAutos.altaAuto(listaRegistrados, altaAutoIngresado());
listaAutos.mostrarRegistro();

//baja

listaAutos.bajaAuto(
  listaRegistrados,
  Number(
    readlineSync.question("ingrese el orden del vehiculo a dar de bajaAuto")
  )
);
listaAutos.mostrarRegistro();

//modificacion

listaAutos.modificarAuto(
  listaRegistrados,
  Number(readlineSync.question("ingrese el orden del vehiculo a modificar")),
  altaAutoIngresado()
);
listaAutos.mostrarRegistro();
