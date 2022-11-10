abstract class Automovil {
  Marca: string;
  Modelo: string;
  Combustible: number;
  Motorizacion: Motor;

  constructor(Marca: string, Modelo: string, Motorizacion: Motor) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Motorizacion = Motorizacion;
    this.Combustible = 0;
  }
}

class Motor {
  Fabricante: string;
  Modelo: string;
  Valvulas: number;
  Combustible: string;
  Cilindros: number;
  Cilindrada: number;
  Potencia: number;

  constructor(
    Fabricante: string,
    Modelo: string,
    Valvulas: number,
    Combustible: string,
    Cilindros: number,
    Cilindrada: number,
    Potencia: number
  ) {
    this.Fabricante = Fabricante;
    this.Modelo = Modelo;
    this.Valvulas = Valvulas;
    this.Combustible = Combustible;
    this.Cilindros = Cilindros;
    this.Cilindrada = Cilindrada;
    this.Potencia = Potencia;
  }
}

interface funcionamientoVehiculo {
  Encendido: boolean;

  repostar(): void;
  EncenderApagar(): void;
}

class Hatchback extends Automovil implements funcionamientoVehiculo {
  Encendido: boolean;

  constructor(Marca: string, Modelo: string, Motorizacion: Motor) {
    super(Marca, Modelo, Motorizacion);
    this.Encendido = false;
  }

  EncenderApagar(): void {
    if (this.Encendido === true) {
      //esta encendido?
      this.Encendido = false;
      console.log("Auto apagado");
    } else if (this.Combustible > 0) {
      //tiene combustible?
      this.Encendido = true;
      console.log("Auto encendido");
    } else {
      console.log("El auto no tiene combustible, repostar por favor");
    }
  }

  repostar(): void {
    this.Combustible = 100;
  }
}

class HyperCar extends Automovil implements funcionamientoVehiculo {
  private ModoSport: boolean;
  Encendido: boolean;

  constructor(Marca: string, Modelo: string, Motorizacion: Motor) {
    super(Marca, Modelo, Motorizacion);
    this.ModoSport = false;
    this.Encendido = false;
  }

  public EncenderApagar(): void {
    if (this.Encendido === true) {
      //esta encendido?
      this.Encendido = false;
      console.log("Auto apagado");
    } else if (this.Combustible > 0) {
      //tiene combustible?
      this.Encendido = true;
      console.log("Auto encendido");
    } else {
      console.log("El auto no tiene combustible, repostar por favor");
    }
  }

  public EncenderApagarModoSport(): void {
    if (this.Encendido === true) {
      //esta encendido?
      if (this.ModoSport === false) {
        //Esta prendido y modo sport inactivo, se activara
        this.ModoSport = true;
        console.log("Modo Sport Activado");
      } else {
        //Esta prendido y modo sport activo, se desactivara
        this.ModoSport = false;
        console.log("Modo Sport Desactivado");
      }
    } else {
      //Esta apagado
      this.ModoSport = false;
      console.log("El Auto esta apagado");
    }
  }

  public repostar(): void {
    this.Combustible = 100;
  }
}

class PickUp extends Automovil implements funcionamientoVehiculo {
  private CapacidadCarga: number;
  Encendido: boolean;

  constructor(
    Marca: string,
    Modelo: string,
    Motorizacion: Motor,
    CapacidadCarga: number
  ) {
    super(Marca, Modelo, Motorizacion);
    this.CapacidadCarga = CapacidadCarga;
    this.Encendido = false;
  }

  public EncenderApagar(): void {
    if (this.Encendido === true) {
      //esta encendido?
      this.Encendido = false;
      console.log("Auto apagado");
    } else if (this.Combustible > 0) {
      //tiene combustible?
      this.Encendido = true;
      console.log("Auto encendido");
    } else {
      console.log("El auto no tiene combustible, repostar por favor");
    }
  }

  public repostar(): void {
    this.Combustible = 100;
  }
}

let fire8v14: Motor = new Motor("Fiat", "Fire", 8, "Nafta", 4, 1.4, 99);
let miCoche: Hatchback = new Hatchback("Fiat", "Punto", fire8v14);
