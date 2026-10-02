class Cliente {

    nombre
    documento
    telefono
    pedidos

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.pedidos = []
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido)
    }

    verCliente() {
        console.log("Nombre del cliente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Teléfono: " + this.telefono)
    }

    verPedidos() {
        console.log("Pedidos del cliente: " + this.nombre)

        this.pedidos.forEach(pedido => {
            pedido.verPedido()
        })
    }
}

export default Cliente; 