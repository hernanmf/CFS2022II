class Televisor {
  volumen: number;
  canal: number;
  estaPrendido: boolean;
  constructor(volumen: number, canal: number, estaPrendido: boolean) {
    this.volumen = volumen;
    this.canal = canal;
    this.estaPrendido = estaPrendido;
  }
  subirVolumen(): void {
    this.volumen = this.volumen + 1;
  }
  bajarVolumen(): void {
    this.volumen = this.volumen - 1;
  }
  apagarTele() {
    this.estaPrendido = false;
  }
  prenderTele() {
    this.estaPrendido = true;
  }
  getCanal() {
    return "esta en el canal " + this.canal;
  }
  setCanal(canal: number) {
    this.canal = canal;
  }
}
let televisor1 = new Televisor(10, 54, true);
console.log(televisor1.getCanal());
televisor1.setCanal(20);
televisor1.bajarVolumen();
televisor1.apagarTele();
console.log(televisor1);
