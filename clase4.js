class Goku{
    constructor(nombre,nivel){
        this.nombre = nombre;
        this.nivel = nivel; //nivel actual de la transformacion 
    }
    mostrarTransformacion(){
        return `${this.nombre} esta en la transformacion:
        ${this.nivel}`
    }
    transformar(nuevaTransformacion){
        this.nivel = nuevaTransformacion;
        return `${this.nombre} se ha transformado en ${this.nivel}!`;
    }
    volverFormaBase(){
        this.nivel = 'Base'
        return `${this.nombre} ha vuelto a su forma base.`
    }

}
//creamos un objeto Goku con su forma base
let goku = new Goku('Goku', 'Base');
console.log(goku)

//mostrar la transformacion actual
console.log(goku.mostrarTransformacion())

//transformar a super saiyan
console.log(goku.transformar('Super Saiyan Dios'))

//volver a la forma base
console.log(goku.volverFormaBase())
