var Auto = /** @class */ (function () {
    function Auto(marca, modelo, segmento, potencia, traccion, velocidadMaxima) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Segmento = segmento;
        this.Potencia = potencia;
        this.Traccion = traccion;
        this.Encendido = false;
        this.velocidadMaxima = velocidadMaxima;
        this.velocidadActual = 0;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.Encendido) {
            this.Encendido = false;
            this.velocidadActual = 0;
        }
        else {
            this.Encendido = true;
            this.velocidadActual = 0;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
        console.log(this.velocidadActual);
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual -= 10;
        console.log(this.velocidadActual);
    };
    Auto.prototype.doblar = function () { };
    Auto.prototype.getAuto = function () {
        console.log(this.Marca + " " + this.Modelo);
    };
    Auto.prototype.getVelocidad = function () {
        console.log(this.velocidadActual);
    };
    return Auto;
}());
var miAutito = new Auto("Fiat", "Punto", "Hatchback", 99, "Delantera", 160);
miAutito.getAuto();
