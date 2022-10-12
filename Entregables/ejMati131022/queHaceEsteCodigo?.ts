/*RESPUESTA: 
1ro crea una persona e imprime por consola el nombre y su edad, luego crea un empleado, imprime por consola el nombre, la edad y el sueldo de la misma y ejecuta un despiadado procedimiento que le indica que como supera los 5000 de sueldo, el empleado debe pagar impuestos.
*/
class Persona {
  protected nombre: string;
  protected edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
  }
}

class Empleado extends Persona {
  private sueldo: number;
  constructor(nombre: string, edad: number, sueldo: number) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }

  imprimir() {
    super.imprimir();
    console.log(`Sueldo: ${this.sueldo}`);
  }

  pagaImpuestos() {
    if (this.sueldo > 5000) console.log(`${this.nombre} debe pagar impuestos`);
    else console.log(`${this.nombre} no debe pagar impuestos`);
  }
}

const persona1 = new Persona("Juan", 44);
persona1.imprimir();

const empleado1 = new Empleado("Ana", 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
