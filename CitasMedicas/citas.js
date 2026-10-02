class Cita {

    fecha
    hora
    motivoConsulta
    paciente
    medico

    constructor(fecha, hora, motivoConsulta, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivoConsulta = motivoConsulta
        this.paciente = paciente
        this.medico = medico
    }

    verCita() {
        console.log("Fecha: " + this.fecha)
        console.log("Hora: " + this.hora)
        console.log("Motivo de consulta: " + this.motivoConsulta)
        console.log("Paciente: " + this.paciente.nombre)
        console.log("Documento del paciente: " + this.paciente.documento)
        console.log("Médico: " + this.medico.nombre)
        console.log("Especialidad: " + this.medico.especialidad)
    }
}

export default Cita;