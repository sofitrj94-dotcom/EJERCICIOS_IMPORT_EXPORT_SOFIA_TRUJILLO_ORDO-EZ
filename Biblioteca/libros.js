class Libros{
    nombre
    editorial
    autor
    constructor(nombre,editorial,autor){
        this.nombre = nombre
        this.editorial = editorial
        this.autor = autor
    }
    registrarnombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    registrarEditorial(nuevoEditorial){
        this.editorial= nuevoEditorial
    }
    registrarAutor(nuevoAutor){
        this.autor= nuevoAutor
    }
    verLibro(){
        console.log("Nombre libro: " + this.nombre + " | Editorial: " + this.editorial + " | Autor: " + this.autor)
    }
}
export default Libros