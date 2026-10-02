class Plato {

    nombre
    categoria
    precio
    disponibilidad

    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.disponibilidad = disponibilidad
    }

    verPlato() {
        console.log("Nombre del plato: " + this.nombre)
        console.log("Categoría: " + this.categoria)
        console.log("Precio: " + this.precio)
        console.log("Disponibilidad: " + this.disponibilidad)
    }
}

export default Plato; 