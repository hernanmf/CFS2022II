"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, "utf-8");
        this.arregloString = archivoTxt.split(";");
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, tipo, nroChasis, nroMotor, nombreTitular, dni) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.nroChasis = nroChasis;
        this.nroMotor = nroMotor;
        this.nombreTitular = nombreTitular;
        this.dni = dni;
    }
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaAutos) {
        this.listaAutos = this.listaAutos;
    }
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log(this.listaAutos);
    };
    RegistroAutomotor.prototype.setListaAutos = function (listaAutos) {
        this.listaAutos = listaAutos;
    };
    /* aca va el abm */
    RegistroAutomotor.prototype.altaAuto = function (listaAutos, auto) {
        listaAutos.push(auto);
    };
    RegistroAutomotor.prototype.bajaAuto = function (listaAutos, posicion) {
        listaAutos.splice(Number(posicion), 1);
    }; /* Splice borra elemento en la posicion dada y desplaza el resto en 1 para cubrir el borrado */
    RegistroAutomotor.prototype.modificarAuto = function (listaDeAutos, posicion, auto) {
        listaAutos[Number(posicion)] = auto;
    }; /* De la lista de coches modifica la posicion del array pisando el auto que tenia con el nuevo */
    return RegistroAutomotor;
}());
function altaAutoTxt(vehiculo, listaAutos) {
    var datosVehiculo = vehiculo.split(",");
    var patente = datosVehiculo[0];
    var marca = datosVehiculo[1];
    var modelo = datosVehiculo[2];
    var tipo = datosVehiculo[3];
    var nroChasis = datosVehiculo[4];
    var nroMotor = datosVehiculo[5];
    var nombreTitular = datosVehiculo[6];
    var dni = Number(datosVehiculo[7]);
    var autoNuevo = new Auto(patente, marca, modelo, tipo, nroChasis, nroMotor, nombreTitular, dni);
    listaAutos.push(autoNuevo);
} //PREGUNTAR SI ESTA FUNCION NO DEBERIA IR EN LA CLASE RegistroAutomotor
function altaAutoIngresado() {
    var patente = readlineSync.question("ingrese patente del vehiculo: ");
    var marca = readlineSync.question("ingrese marca del vehiculo: ");
    var modelo = readlineSync.question("ingrese modelo del vehiculo: ");
    var tipo = readlineSync.question("ingrese el tipo del vehiculo: ");
    var nroChasis = readlineSync.question("ingrese el numero de chasis del vehiculo: ");
    var nroMotor = readlineSync.question("ingrese el numero de motor del vehiculo: ");
    var nombreTitular = readlineSync.question("ingrese el nombre y apellido del titular del automovil: ");
    var dni = Number(readlineSync.question("ingrese el DNI del titular del automovil: "));
    var autoNuevo = new Auto(patente, marca, modelo, tipo, nroChasis, nroMotor, nombreTitular, dni);
    return autoNuevo;
}
/* Inicio del script */
var autosRegistrados = new GestorDeArchivos("autosRegistrados.txt");
var listaRegistrados = [];
/* de los datos en el archivo y se crea el arreglo de autos */
for (var i = 0; i < autosRegistrados.getArregloString().length; i++) {
    altaAutoTxt(autosRegistrados.getArregloString()[i], listaRegistrados);
}
/* Volcamos el listado tomado al registro y lo mostramos*/
var listaAutos = new RegistroAutomotor(listaRegistrados);
listaAutos.mostrarRegistro();
//alta
listaAutos.altaAuto(listaRegistrados, altaAutoIngresado());
listaAutos.mostrarRegistro();
//baja
listaAutos.bajaAuto(listaRegistrados, Number(readlineSync.question("ingrese el orden del vehiculo a dar de bajaAuto")));
listaAutos.mostrarRegistro();
//modificacion
listaAutos.modificarAuto(listaRegistrados, Number(readlineSync.question("ingrese el orden del vehiculo a modificar")), altaAutoIngresado());
listaAutos.mostrarRegistro();
