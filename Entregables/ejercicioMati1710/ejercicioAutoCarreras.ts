class Auto {
  protected Marca: string;
  protected Modelo: string;
  protected Potencia: number;
  protected Encendido: boolean;
  protected Velocidad: number;
  protected Combustible: number;

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

  public acelerar(cuanto: number): void {}

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
}

class AutoCarrerasF1 extends Auto {
  private DRSActivo: boolean;
  private Equipo: string;

  constructor(Marca: string, Modelo: string, Potencia: number, Equipo: string) {
    super(Marca, Modelo, Potencia);
    this.Equipo = Equipo;
    this.DRSActivo = false;
  }

  public getEquipo(): string {
    return this.Equipo;
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
}
