/* Enunciado
crear la clase telefono con los siguentes atributos y metodos 
estaprendido,bateriaaccual, linternaprendida,
metodos: hacerllamadas(),mandarmensajes(),prenderApagar()

clase telefonoConCamara
atributos: camara (del tipo camara), metodo:sacarFoto

clase camara: sacarFotos(): devuelve String

piensen en las relaciones que existe en cada uno herencia, composición y agregación
herencia;"ES_UN"
composición "TIENE_UN" O "DEBE TENER UN"
agregacion;"TIENE_UN"
dependecia "USA_UN", "UTILIZA UN" 
*/

class telefono {
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
