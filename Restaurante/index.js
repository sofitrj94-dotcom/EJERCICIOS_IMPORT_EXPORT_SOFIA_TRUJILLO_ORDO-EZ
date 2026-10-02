import Plato from "./platos.js";
import Cliente from "./clientes.js";
import Pedido from "./pedidos.js";


let hamburguesa = new Plato("Hamburguesa", "Comida rápida", 18000, true);
let pizza = new Plato("Pizza", "Comida italiana", 25000, true);
let pasta = new Plato("Pasta Carbonara", "Comida italiana", 22000, true);

let maria = new Cliente("María López", "123456789", "3001234567");
let juan = new Cliente("Juan Pérez", "987654321", "3107654321");


hamburguesa.verPlato();
pizza.verPlato();
pasta.verPlato();


let pedido1 = new Pedido("02/10/2026", 1, maria);

pedido1.agregarPlato(hamburguesa);
pedido1.agregarPlato(pizza);


let pedido2 = new Pedido("02/10/2026", 2, juan);

pedido2.agregarPlato(pizza);
pedido2.agregarPlato(pasta);


maria.agregarPedido(pedido1);
juan.agregarPedido(pedido2);


pedido1.verPedido();
pedido2.verPedido();


maria.verCliente();
maria.verPedidos();


juan.verCliente();
juan.verPedidos();