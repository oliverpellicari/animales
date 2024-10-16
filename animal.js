// Definición de la clase Animal
class Animal {
    constructor(nombre, tipo, nacimiento) {
      this.nombre = nombre;          // Nombre del animal
      this.tipo = tipo;              // Tipo de animal (por ejemplo, perro, gato)
      this.nacimiento = nacimiento;  // Año de nacimiento del animal
    }
  
    // Método para visualizar los datos del animal
    visualizar() {
      return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Año de nacimiento: ${this.nacimiento}`;
    }
  }
  