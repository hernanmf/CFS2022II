class Auto {
  public Marca: string;
  public Modelo: string;
  private Segmento: string;
  private Potencia: number;
  private Traccion: string;
  public Encendido: boolean;
  private velocidadMaxima: number;
  public velocidadActual: number;

  constructor(
    marca: string,
    modelo: string,
    segmento: string,
    potencia: number,
    traccion: string,
    velocidadMaxima: number
  ) {
    this.Marca = marca;
    this.Modelo = modelo;
    this.Segmento = segmento;
    this.Potencia = potencia;
    this.Traccion = traccion;
    this.Encendido = false;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidadActual = 0;
  }

  encenderApagar(): void {
    if (this.Encendido) {
      this.Encendido = false;
      this.velocidadActual = 0;
    } else {
      this.Encendido = true;
      this.velocidadActual = 0;
    }
  }

  acelerar(): void {
    this.velocidadActual += 10;
    console.log(this.velocidadActual);
  }

  frenar(): void {
    this.velocidadActual -= 10;
    console.log(this.velocidadActual);
  }

  doblar(): void {}

  getAuto() {
    console.log(this.Marca + ` ` + this.Modelo);
  }

  getVelocidad() {
    console.log(this.velocidadActual);
  }
}

let miAutito: Auto = new Auto(
  `Fiat`,
  `Punto`,
  `Hatchback`,
  99,
  `Delantera`,
  160
);

miAutito.getAuto();
