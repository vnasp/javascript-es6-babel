import { Impuestos } from "./Impuestos.js"

export class Cliente {
  // Declaración de propiedad privada en ES6
  #nombre
  #impuestos

  constructor(nombre, montoBrutoAnual, deducciones) {
    this.#nombre = nombre
    this.#impuestos = new Impuestos(montoBrutoAnual, deducciones)
  }

  // Método getter ES6 para obtener el nombre
  get nombre() {
    return this.#nombre
  }

  // Método setter ES6 para modificar el nombre
  set nombre(nombre) {
    this.#nombre = nombre
  }

  // Método para calcular impuestos
  calcularImpuesto() {
    return this.#impuestos.calcularImpuesto()
  }
}