//Ejercicio 1: Gestión de Inventario de Tienda

const tienda = {
  nombre: "TiendaHallowen",
  productos: [
    { nombre: "Máscara de Halloween", precio: 10.0, cantidad: 5 },
    { nombre: "Disfraz de Spiderman", precio: 24.0, cantidad: 8 },
    { nombre: "Disfraz de Batman", precio: 29.5, cantidad: 10 },
    { nombre: "Disfraz de Superman", precio: 34.999, cantidad: 20 },
    { nombre: "Disfraz de Mujer Maravilla", precio: 20.45, cantidad: 30 },
  ],
  agregarProducto: function (nombre, precio, cantidad) {
    this.productos.push({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    });
  },

  actualizarcantidad: function (nombre, cantidad) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].nombre === nombre) {
        this.productos[i].cantidad = cantidad;
      }
    }
  },
};

console.log(["bienvenidos a mi tienda"]);
console.log(tienda.nombre);

console.log("agregando producto");
tienda.agregarProducto("calabaza", 4500, 200), console.table(tienda.productos);

console.log("tabla actualizada")
tienda.actualizarcantidad("Máscara de Halloween", 10), console.table(tienda.productos);

