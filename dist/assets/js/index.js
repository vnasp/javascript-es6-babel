"use strict";

var _Cliente = require("./clases/Cliente.js");
// Importamos ES6

// Instanciamos clientes
var cliente1 = new _Cliente.Cliente("Juan Pérez", 100000, 20000);
var cliente2 = new _Cliente.Cliente("Ana Gómez", 150000, 30000);

// Mostrar información del cliente y calcular sus impuestos
console.log("El cliente ".concat(cliente1.nombre, " debe pagar $").concat(cliente1.calcularImpuesto(), " en impuestos."));
console.log("El cliente ".concat(cliente2.nombre, " debe pagar $").concat(cliente2.calcularImpuesto(), " en impuestos."));