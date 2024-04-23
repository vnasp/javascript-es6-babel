  // 1. Creamos la función constructora con propideduccioneses privadas con _
export class Impuestos {
  #montoBrutoAnual
  #deducciones

  constructor(montoBrutoAnual, deducciones) {
    this.#montoBrutoAnual = montoBrutoAnual
    this.#deducciones = deducciones
  }
  
    // Método getter para obtener el monto bruto anual
    get montoBrutoAnual() {
      return this.#montoBrutoAnual
    }
  
    // Método setter para modificar el monto bruto anual
    set montoBrutoAnual(montoBrutoAnual) {
      this.#montoBrutoAnual = montoBrutoAnual
    }

    // Método getter para obtener las deducciones
    get deducciones() {
      return this.#deducciones
    }
  
    // Método setter para modificar las deducciones
    set deducciones(deducciones) {
      this.#deducciones = deducciones
    }

    calcularImpuesto() {
      return (this.#montoBrutoAnual - this.#deducciones) * 0.21
    }
  }