class Paciente {

    nombre
    documento
    edad
    telefono
    citas

    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.edad = edad
        this.telefono = telefono
        this.citas = []
    }

    agregarCita(cita) {
        this.citas.push(cita)
    }

    verPaciente() {
        console.log("Nombre del paciente: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Edad: " + this.edad)
        console.log("Teléfono: " + this.telefono)
    }

    verCitas() {
        console.log("Citas del paciente: " + this.nombre)

        this.citas.forEach(cita => {
            cita.verCita()
        })
    }
}

export default Paciente;