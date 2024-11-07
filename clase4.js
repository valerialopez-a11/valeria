class Goku{
    constructor(nombre,nivel){
        this.nombre = nombre;
        this.nivel = nivel; //nivel actual de la transformacion 
    }
}
class Goku {
    mostrarTransformacion(){
        return `${this.nombre} esta en la transformacion:
        ${this.nivel}`
    }
}
