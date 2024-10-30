const ejemplo = [1,2,3,4,5,]
console.log("recorrer ejemplo con for")
for (let i = 0; i < ejemplo.length; i++) {
    console.log(ejemplo[i])
}

//recorrer el arreglo
console.log('recorrer ejemplo de forEach')
ejemplo.forEach((elemento, index)=> {
    console.log(('el dato', elemento, 'se encuentra en ', index))
    
}
)

//cual es la posicion del dato
const index = ejemplo.indexOf(3)
console.log("el valor 3 esta en la posicion" ,index)

//(nombre archivo).shift() elimina el primer dato
//(nombre archivo).pop() elimina el ultimo dato

ejemplo.shift()
console.log(ejemplo)

ejemplo.pop()
console.log(ejemplo)
