class Clientes {
    nombre
    documento
    telefono
    edad
    rutinas

    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.edad = edad;
        this.rutinas = [];
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
    }

    verCliente() {
        console.log("Nombre: " + this.nombre);
        console.log("Documento: " + this.documento);
        console.log("Teléfono: " + this.telefono);
        console.log("Edad: " + this.edad);

        for (let i = 0; i < this.rutinas.length; i++) {
            this.rutinas[i].verRutina();
        }
    }
}

export default Clientes;