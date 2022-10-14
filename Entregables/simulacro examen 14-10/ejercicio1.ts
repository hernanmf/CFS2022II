/* Ejercicio 1:
Con todo lo aprendido hasta el momento optimizar el siguiente codigo,-teniendo presente todo lo hablado sobre buenas practicas- ver que herramientas de las hasta ahora vistas se pueden utilizar (composicion, herencia, polimorfismo, etc). */
import { clearScreenDown } from "readline";

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log("wuff wuff\n");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log("meow meow\n");
  }
}

let minino: Cat = new Cat("Pocky");
minino.makeSound(); // -> meow meow
let firulais: Dog = new Dog("Pocky");
firulais.makeSound(); // -> wuff wuff
