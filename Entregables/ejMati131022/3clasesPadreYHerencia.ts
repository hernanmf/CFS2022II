/*1er clase*/
class Aeronave {
  private codigoID: string;
  private tieneMotor: boolean;
  private potenciaMotor: number;
  private peso: number;
  private cantidadTripulantes: number;
  private altitud: number;
  private velocidad: number;

  constructor(
    codigoID: string,
    tieneMotor: boolean,
    potenciaMotor: number,
    peso: number,
    cantidadTripulantes: number
  ) {
    this.codigoID = codigoID;
    this.tieneMotor = tieneMotor;
    this.potenciaMotor = potenciaMotor;
    this.peso = peso;
    this.cantidadTripulantes = cantidadTripulantes;
    this.altitud = 0;
    this.velocidad = 0;
  }

  private elevarse(distancia: number): void {
    this.altitud += distancia;
    console.log("La aeronave se elevo a ", this.altitud, "mts de tierra");
  }

  private descender(distancia: number): void {
    if (distancia <= this.altitud) {
      this.altitud += distancia;
      console.log("La aeronave descendio a ", this.altitud, "mts de tierra");
    } else {
      console.log(
        "La aeronave no descendera esa distancia porque se estrellara contra el suelo, la misma mantendra la altitud"
      );
    }
  }

  private acelerar(vel: number): void {
    console.log("Velocidad aumentada a", this.velocidad);
  }

  private aterrizar(): void {
    this.altitud = 0;
    this.velocidad = 0;
  }
}

class Helicoptero extends Aeronave {
  motorEncendido: boolean;
  constructor(
    codigoID: string,
    tieneMotor: boolean,
    potenciaMotor: number,
    peso: number,
    cantidadTripulantes: number
  ) {
    super(codigoID, true, potenciaMotor, peso, cantidadTripulantes);
    this.motorEncendido = false;
  }

  private encenderApagar(): void {
    if (this.motorEncendido) {
      this.motorEncendido = false;
    } else {
      this.motorEncendido = true;
    }
  }
}

class Aeroplano extends Aeronave {
  constructor(
    codigoID: string,
    tieneMotor: boolean,
    potenciaMotor: number,
    peso: number,
    cantidadTripulantes: number
  ) {
    super(codigoID, true, 0, peso, cantidadTripulantes);
  }
}

/*2da clase*/
class Electrodomestico {
  private codigo: string;
  private marca: string;
  private modelo: string;
  private eficienciaEnergetica: string;
  private categoria: string;
  private stock: number;
  private precio: number;

  constructor(
    codigo: string,
    marca: string,
    modelo: string,
    eficienciaEnergetica: string,
    categoria: string,
    stock: number,
    precio: number
  ) {
    this.codigo = codigo;
    this.marca = marca;
    this.modelo = modelo;
    this.eficienciaEnergetica = eficienciaEnergetica;
    this.categoria = categoria;
    this.stock = stock;
    this.precio = precio;
  }

  private aumentarStock(cantidad: number): void {
    if (cantidad > 0) {
      this.stock += cantidad;
      console.log("Producto restockeado ahora hay ", this.stock, " unidades");
    }
  }

  private venderUnidad(): void {
    if (this.stock > 0) {
      this.stock--;
      console.log("Producto vendido ahora hay ", this.stock, " unidades");
    }
  }

  private actualizarPrecio(nvoPrecio: number): void {
    if (nvoPrecio > 0) {
      this.precio = nvoPrecio;
      console.log("El precio nuevo del producto es ", this.precio);
    }
  }
}

class Smartphone extends Electrodomestico {
  private memoriaInterna: number;
  private bateria: number;
  private tamanioPantalla: number;
  private sistemaOperativo: string;
  private encendido: boolean;
  private bateriaRestante: number;

  constructor(
    codigo: string,
    marca: string,
    modelo: string,
    eficienciaEnergetica: string,
    categoria: string,
    stock: number,
    precio: number,
    memoriaInterna: number,
    bateria: number,
    tamanioPantalla: number,
    sistemaOperativo: string
  ) {
    super(
      codigo,
      marca,
      modelo,
      eficienciaEnergetica,
      categoria,
      stock,
      precio
    );
    this.memoriaInterna = memoriaInterna;
    this.bateria = bateria;
    this.tamanioPantalla = tamanioPantalla;
    this.sistemaOperativo = sistemaOperativo;
    this.encendido = false;
    this.bateriaRestante = 0;
  }

  private botonPower(): void {
    if (this.encendido) {
      this.encendido = false;
      console.log("Apagando...");
    } else if (this.bateriaRestante > 0) {
      this.encendido = true;
      console.log("Encendiendo...");
    } else {
      console.log("Bateria insuficiente, ponganme a cargar");
    }
  }
}

/*3er clase*/
class Comercio {}
