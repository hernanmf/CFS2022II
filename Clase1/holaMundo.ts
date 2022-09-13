/*HOLA MUNDO
let mensaje: string = `hola Mundo!`;
console.log(mensaje);
 */

/* ALTURA
let readlineSync = require(`readline-sync`);
let alturaPersona = readlineSync.question(`Ingrese la altura de la persona:`);
console.log(`La altura es ${alturaPersona}cm`); */

/* INGRESA PALABRAS Y MUESTRA POR SEPARADO
let readlineSync = require(`readline-sync`);
let palabras: number = readlineSync.question(
  `Ingrese la cantidad de palabras que tendra el mensaje: `
);
let arregloMensaje: string[] = new Array();
for (let i = 0; i <= palabras - 1; i++) {
  arregloMensaje[i] = readlineSync.question(`Ingrese la palabra ${i + 1}: `);
}
console.log(arregloMensaje);
 */

/* BASE X ALTURA
let readlineSync = require(`readline-sync`);
let base: number = readlineSync.question(`Ingrese la base:`);
let altura: number = readlineSync.question(`Ingrese la altura:`);
let resultado: number = base * altura;
console.log(`El resultado es: ${resultado}`);
 */
