//crear objeto

const usuario ={
    nombre: 'Valeria',
    edad: 20,
    trabaja: true,
    //agregar una funcion para saludar
    saludar(){
        console.log(`hola mi nombre es ${this.nombre}  y tengo ${this.edad} años.`);
    }
}
//imprimir a las propiedades de un objeto 

console.log(usuario)

//imprimir una propiedad en especifico de un objeto
console.log(usuario.nombre)
console.log(usuario.edad)
console.log(usuario.trabaja)

//agregar propiedader al usuario 
usuario.carrera = "ingenieria de sistemas"
console.log(usuario)

//llamar saludo 
usuario.saludar()

//eliminar una propiedad
delete usuario.trabaja
console.log(usuario)

//consultar si una propiedad existe 
console.log(usuario.hasOwnProperty('nombre'))
console.log(usuario.hasOwnProperty('apellido'))
