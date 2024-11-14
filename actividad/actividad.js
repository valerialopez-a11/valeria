class HashTable {
    constructor(size = 20) {
        this.table = new Array(size); // Creamos el array para la tabla hash
        this.size = size;
    }

    // Función hash para convertir la clave en un índice
    _hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i); // Sumamos el valor ASCII de cada caracter
        
        }
        console.log("key: "+ key+" hashValue: "+hashValue);
        return hashValue % this.size; // Aseguramos que el índice esté dentro de los límites
    }

    // Método para agregar un par clave-valor
    set(key, value) {
        // const index = value % this.size; // Calculamos el índice
        const index = this._hash(key); // Calculamos el índice usando la función hash
        if (!this.table[index]) {
            this.table[index] = []; // Inicializamos el índice con un array si está vacío
        }
        
        // Buscamos si la clave ya existe y actualizamos el valor
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Si la clave no existe, agregamos el par [clave, valor] al array
        this.table[index].push([key, value]);
    }

    // Método para obtener un valor a partir de una clave
    get(key) {
        const index = this._hash(key);
        if (!this.table[index]) return undefined;

        // Buscamos el par clave-valor en el índice y devolvemos el valor si encontramos la clave
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined; // Retorna undefined si no encuentra la clave
    }

    // Método para eliminar un par clave-valor
    remove(key) {
        const index = this._hash(key);
        if (!this.table[index]) return false;

        // Recorremos el array en el índice y eliminamos el par si encontramos la clave
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1); // Eliminamos el par clave-valor
                return true; // Retorna true para indicar que se eliminó el par
            }
        }
        return false; // Retorna false si no encuentra la clave
    }

    // Método para mostrar todos los elementos de la tabla
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(`Index ${i}:`, this.table[i]);

            }
        }
    }
}

// Ejemplo de uso
const hashTable = new HashTable();

hashTable.set("name", "Alice");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log("Nombre:", hashTable.get("name")); // Alice
console.log("Edad:", hashTable.get("age"));    // 30
console.log("Ciudad:", hashTable.get("city")); // New York

// Mostrar toda la tabla hash
console.log("Tabla Hash:");
hashTable.display();

// Prueba de eliminación
console.log("Eliminando 'age':", hashTable.remove("age")); // true
console.log("Edad después de eliminar:", hashTable.get("age")); // undefined

// Mostrar la tabla hash después de eliminar
console.log("Tabla Hash después de eliminar:");
hashTable.display();