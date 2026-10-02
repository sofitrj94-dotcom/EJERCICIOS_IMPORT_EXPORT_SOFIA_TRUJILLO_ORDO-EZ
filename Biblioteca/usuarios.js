import prestamos from "./prestamos.js"
class Usuarios{
nombre
apellido
direccion
telefono
    constructor(nombre,apellido,direccion,telefono){
        this.nombre = nombre
        this.apellido = apellido 
        this. direccion = direccion
        this.telefono = telefono
    }
    verinfo(){
        console.log("el usuario es " + this.nombre + " " + this.apellido)
    }
}
export default Usuarios