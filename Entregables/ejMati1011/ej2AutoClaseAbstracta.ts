abstract class Vehiculo {
  protected Marca: string;
  protected Modelo: string;
  protected Encendido: boolean;
  protected Combustible: number;
  protected Potencia: number;

  constructor(Marca: string, Modelo: string, Potencia: number) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Potencia = Potencia;
    this.Encendido = false;
    this.Combustible = 100;
  }

  public getMarca(): string {
    return this.Marca;
  }

  public getModelo(): string {
    return this.Modelo;
  }

  public getCombustible(): number {
    return this.Combustible;
  }

  public getPotencia(): number {
    return this.Potencia;
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

class AutoCiudad extends Vehiculo {
  constructor(Marca: string, Modelo: string, Potencia: number) {
    super(Marca, Modelo, Potencia);
  }
}

class AutoDeportivo extends Vehiculo {
  private ModoSport: boolean;

  constructor(Marca: string, Modelo: string, Potencia: number) {
    super(Marca, Modelo, Potencia);
    this.ModoSport = false;
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
}

class Camioneta extends Vehiculo {
  private CapacidadCarga: number;

  constructor(
    Marca: string,
    Modelo: string,
    Potencia: number,
    CapacidadCarga: number
  ) {
    super(Marca, Modelo, Potencia);
    this.CapacidadCarga = CapacidadCarga;
  }
}
