//arreglo de 5 componentes promedio de las mismas 

const ejemplo = [1.30 , 1.45 ,1.65 ,1.25 ,1.50 ,]
console.log("recorrer ejemplo con for")
let suma = 0;
for (let i = 0; i < ejemplo.length; i++) {
    console.log(ejemplo[i])
    suma += ejemplo[i];
}
console.log("la suma de los valores es: ", suma)
let promedio = suma/ejemplo.length 
console.log("el promedio de los valores es: ", promedio)

//ejercicio frutas 

let frutas = ["manzana", "pera", "platano" ,"cereza"];
console.log(frutas)
console.log("encontrar la posicion de platano")
let posicion = frutas.indexOf("platano");
console.log("la posicion de platano es: ", posicion)

//agregar mango al final 
frutas.push("mango")
console.log("agregar mango al final: ", frutas)

//agregar fresa al inicio 
frutas.unshift("fresa")
console.log("agregar fresa al inicio: ", frutas)

//eliminar el primer elemento (manzana)
frutas.shift(0,1)
console.log("eliminar manzana: ", frutas)

//eliminar el ultimo elemento (mango)
frutas.pop()
console.log("eliminar mango: ", frutas)

console.log("queda el arreglo en frutas " , frutas)

