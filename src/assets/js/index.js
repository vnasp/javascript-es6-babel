// Importamos en ES6
import { Cliente } from "./clases/Cliente.js"

// Instanciamos clientes
const cliente1 = new Cliente("Juan Pérez", 100000, 20000)
const cliente2 = new Cliente("Ana Gómez", 150000, 30000)

// Mostramos información del cliente con interpolación ES6
console.log(`El cliente ${cliente1.nombre} debe pagar $${cliente1.calcularImpuesto()} en impuestos.`)
console.log(`El cliente ${cliente2.nombre} debe pagar $${cliente2.calcularImpuesto()} en impuestos.`)