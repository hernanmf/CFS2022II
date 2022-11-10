interface auto {
  Marca: string;
  Modelo: string;
  Potencia: number;
  Encendido: boolean;
  Velocidad: number;
  Combustible: number;

  getMarca(): string;
  getModelo(): string;
  getVelocidad(): number;
  getCombustible(): number;
  EncenderApagar(): void;
  repostar(): void;
}

class AutoFamiliar implements auto {
  Marca: string;
  Modelo: string;
  Potencia: number;
  Encendido: boolean;
  Velocidad: number;
  Combustible: number;

  constructor(Marca: string, Modelo: string, Potencia: number) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Potencia = Potencia;
    this.Encendido = false;
    this.Velocidad = 0;
    this.Combustible = 100;
  }

  public getMarca(): string {
    return this.Marca;
  }

  public getModelo(): string {
    return this.Modelo;
  }

  public getVelocidad(): number {
    return this.Velocidad;
  }

  public getCombustible(): number {
    return this.Combustible;
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

class AutoCarrerasF1b implements auto {
  Marca: string;
  Modelo: string;
  Potencia: number;
  Encendido: boolean;
  Velocidad: number;
  Combustible: number;
  DRSActivo: boolean;
  Equipo: string;

  constructor(Marca: string, Modelo: string, Potencia: number, Equipo: string) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Potencia = Potencia;
    this.Encendido = false;
    this.Velocidad = 0;
    this.Combustible = 100;
    this.Equipo = Equipo;
    this.DRSActivo = false;
  }
  public getMarca(): string {
    return this.Marca;
  }

  public getModelo(): string {
    return this.Modelo;
  }

  public getVelocidad(): number {
    return this.Velocidad;
  }

  public getCombustible(): number {
    return this.Combustible;
  }

  public getEquipo(): string {
    return this.Equipo;
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

  public acelerar(cuanto: number): void {
    if (this.Combustible > cuanto * 0.1) {
      this.Velocidad += cuanto;
      this.Combustible -= cuanto * 0.1;
      console.log(
        "Velocidad actual: ",
        this.Velocidad,
        ", combustible restante: ",
        this.Combustible
      );
    } else {
      this.Velocidad = 0;
      this.Encendido = false;
      console.log(
        " El auto se quedo sin combustible, se apago y freno por completo, repostar por favor"
      );
    }
  }

  public frenar(): void {
    if (this.Velocidad - 10 <= 0) {
      this.Velocidad = 0;
      console.log("El auto esta detenido");
    } else {
      this.Velocidad -= 10;
      console.log(
        "Velocidad actual: ",
        this.Velocidad,
        ", combustible restante: ",
        this.Combustible
      );
    }
  }

  public repostar(): void {
    this.Combustible = 100;
  }

  public activarDesactivarDRS(): void {
    if (this.DRSActivo === true) {
      //esta encendido?
      this.DRSActivo = false;
      console.log("DRS desactivado");
    } else {
      //tiene combustible?
      this.DRSActivo = true;
      console.log("DRS activo");
    }
  }
}
