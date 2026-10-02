import Paciente from "./pacientes.js";

import Medico from "./medicos.js";

import Cita from "./citas.js";


let maria = new Paciente("María López", "123456789", 25, "3001234567");
let juan = new Paciente("Juan Pérez", "987654321", 32, "3107654321");


let carlos = new Medico("Carlos Rodríguez", "456789123", "Medicina General", "3151234567");
let ana = new Medico("Ana Martínez", "654321987", "Pediatría", "3207654321");


maria.verPaciente();
juan.verPaciente();


carlos.verMedico();
ana.verMedico();


let cita1 = new Cita(
    "05/10/2026",
    "08:00",
    "Dolor de cabeza",
    maria,
    carlos
);

let cita2 = new Cita(
    "06/10/2026",
    "10:00",
    "Dolor de estómago",
    juan,
    carlos
);

let cita3 = new Cita(
    "10/10/2026",
    "14:00",
    "Control médico",
    maria,
    ana
);


maria.agregarCita(cita1);
juan.agregarCita(cita2);
maria.agregarCita(cita3);


cita1.verCita();
cita2.verCita();
cita3.verCita();


maria.verCitas();
juan.verCitas();