class Entrenadores {
    nombre
    especialidad
    telefono
    rutinas

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.rutinas = [];
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
    }

    verEntrenador() {
        console.log("Nombre: " + this.nombre);
        console.log("Especialidad: " + this.especialidad);
        console.log("Teléfono: " + this.telefono);

        for (let i = 0; i < this.rutinas.length; i++) {
            console.log("Rutina: " + this.rutinas[i].nombre);
        }
    }
}

export default Entrenadores;