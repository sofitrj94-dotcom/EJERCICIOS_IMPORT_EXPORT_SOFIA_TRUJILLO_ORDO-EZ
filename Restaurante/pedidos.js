class Pedido {

    fecha
    numeroPedido
    cliente
    platos

    constructor(fecha, numeroPedido, cliente) {
        this.fecha = fecha
        this.numeroPedido = numeroPedido
        this.cliente = cliente
        this.platos = []
    }

    agregarPlato(plato) {
        this.platos.push(plato)
    }

    verPedido() {
        console.log("Fecha: " + this.fecha)
        console.log("Número de pedido: " + this.numeroPedido)
        console.log("Cliente: " + this.cliente.nombre)

        console.log("Platos solicitados:")

        this.platos.forEach(plato => {
            console.log("- " + plato.nombre)
        })
    }
}

export default Pedido;