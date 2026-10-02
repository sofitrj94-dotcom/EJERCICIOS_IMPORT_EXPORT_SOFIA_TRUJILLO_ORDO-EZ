import Clientes from "./clientes.js";
import Entrenadores from "./entrenadores.js";
import Rutinas from "./rutinas.js";


let carlos = new Entrenadores("Carlos", "Musculación", "3004567890");
let laura = new Entrenadores("Laura", "Entrenamiento funcional", "3009876543");

let fuerza = new Rutinas("Fuerza", "Aumentar masa muscular", "60 minutos", carlos);
let resistencia = new Rutinas("Resistencia", "Mejorar condición física", "45 minutos", laura);


carlos.asignarRutina(fuerza);
laura.asignarRutina(resistencia);


carlos.verEntrenador();
laura.verEntrenador();


let sofia = new Clientes("Sofía", "12345", "3001234567", 20);


sofia.asignarRutina(fuerza);
sofia.asignarRutina(resistencia);


sofia.verCliente();