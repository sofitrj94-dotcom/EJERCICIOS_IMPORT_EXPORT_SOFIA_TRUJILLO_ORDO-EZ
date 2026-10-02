class Alquiler {

    fechaInicio
    fechaFinalizacion
    cliente
    vehiculo

    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.cliente = cliente
        this.vehiculo = vehiculo
    }

    verAlquiler() {
        console.log("Fecha de inicio: " + this.fechaInicio)
        console.log("Fecha de finalización: " + this.fechaFinalizacion)
        console.log("Cliente: " + this.cliente.nombre)
        console.log("Vehículo: " + this.vehiculo.marca + " " + this.vehiculo.modelo)
        console.log("Placa: " + this.vehiculo.placa)
        console.log("Tipo: " + this.vehiculo.tipo)
    }
}

export default Alquiler;