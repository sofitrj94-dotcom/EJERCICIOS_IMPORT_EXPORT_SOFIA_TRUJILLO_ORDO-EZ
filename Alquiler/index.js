import Vehiculo from "./vehiculos.js";
import Cliente from "./clientes.js";
import Alquiler from "./alquileres.js";


let toyota = new Vehiculo("ABC123", "Toyota", "Corolla", "Sedán");
let chevrolet = new Vehiculo("DEF456", "Chevrolet", "Onix", "Sedán");
let mazda = new Vehiculo("GHI789", "Mazda", "CX-5", "Camioneta");


let maria = new Cliente("María López", "123456789", "3001234567");
let juan = new Cliente("Juan Pérez", "987654321", "3107654321");


toyota.verVehiculo();
chevrolet.verVehiculo();
mazda.verVehiculo();


let alquiler1 = new Alquiler("02/10/2026", "05/10/2026", maria, toyota);
let alquiler2 = new Alquiler("03/10/2026", "07/10/2026", juan, chevrolet);
let alquiler3 = new Alquiler("10/10/2026", "15/10/2026", maria, mazda);


maria.agregarAlquiler(alquiler1);
juan.agregarAlquiler(alquiler2);
maria.agregarAlquiler(alquiler3);


alquiler1.verAlquiler();
alquiler2.verAlquiler();
alquiler3.verAlquiler();


maria.verCliente();
maria.verAlquileres();


juan.verCliente();
juan.verAlquileres();