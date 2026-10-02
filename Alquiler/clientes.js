class Cliente {

    nombre
    documento
    telefono
    alquileres

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.alquileres = []
    }

    agregarAlquiler(alquiler) {
        this.alquileres.push(alquiler)
    }

    verCliente() {
        console.log("Nombre del cliente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Teléfono: " + this.telefono)
    }

    verAlquileres() {
        console.log("Alquileres del cliente: " + this.nombre)

        this.alquileres.forEach(alquiler => {
            alquiler.verAlquiler()
        })
    }
}

export default Cliente;