class Auto {
  Marca: string;
  Modelo: string;
  Traccion: string;
  Potencia: number;
  Peso: number;

  constructor(
    Marca: string,
    Modelo: string,
    Traccion: string,
    Potencia: number,
    Peso: number
  ) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Traccion = Traccion;
    this.Potencia = Potencia;
    this.Peso = Peso;
  }
}

class AutoCarreras extends Auto {
  Categoria: string;

  constructor(
    Marca: string,
    Modelo: string,
    Traccion: string,
    Potencia: number,
    Peso: number,
    Categoria: string
  ) {
    super(Marca, Modelo, Traccion, Potencia, Peso);
    this.Categoria = Categoria;
  }
}

class AutoDeCalle extends Auto {
  Patente: string;

  constructor(
    Marca: string,
    Modelo: string,
    Traccion: string,
    Potencia: number,
    Peso: number,
    Patente: string
  ) {
    super(Marca, Modelo, Traccion, Potencia, Peso);
    this.Patente = Patente;
  }
}
