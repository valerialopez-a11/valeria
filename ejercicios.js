class rectangulo{
    constructor (ancho,alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    areaRectangulo(){
        return `el area del rectangulo es ${this.ancho * this.alto}.`;
    }
    perimetroRectangulo(){
        return `el perimetro del rectangulo es  ${2 * this.ancho + 2 * this.alto}.`;
    }
}   

//creamos un objeto rectangulo
let rectanguloo = new rectangulo(5,6);
console.log(rectanguloo.areaRectangulo());
console.log(rectanguloo.perimetroRectangulo());

//ejercicio 2
class propiedades {
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    datosPersonales(){
        return `mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
    edadPropiedad(){
        if (this.edad >= 18) {
            console.log("Es mayor de edad .");
        } else  {
            console.log("Es menor de edad .");
        }
    }

    
}
//creamos un objeto propiedades
let propi = new propiedades(`valeria`,15);
console.log(propi.datosPersonales());
console.log(propi.edadPropiedad());

//ejercicio 3 
class empleado{
    constructor(nombre,salario, puesto){
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }
    incrementarSalario (){
        this.salario += 100000;
        return `el salario de ${this.nombre} ha sido incrementado con un valor de 100000.`;
    }
    datosEmpleados(){
        return `el empleado ${this.nombre} tiene un salario de ${this.salario} y ocupa un puesto como ${this.puesto}.`
    }
}
//creamos un objeto empleado
let empl = new empleado(`Kevin`, 500000, `gerente`);
console.log(empl.incrementarSalario());
console.log(empl.datosEmpleados()); 