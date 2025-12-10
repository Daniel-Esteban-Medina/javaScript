// EJERCICIO 1
function filtrarPares(...nums){
    let resultado = [];
    for(let i = 0; i < nums.length; i++){
        if((nums[i]%2) == 0){
            resultado.push(nums[i]);
        }
    }
    return resultado;
}
console.log("EJERCICIO 1: "+filtrarPares(1,2,3,4,5,6,7,8,9,10));

// EJERCICIO 2
class Producto{
    constructor(id, nombre, categoria, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    actualizarCantidad(nuevaCantidad){
        this.cantidad = nuevaCantidad;
    }
    obtenerValorTotal(){
        return this.precio * this.cantidad;
    }
}
class Almacen{
    constructor(coleccionProductos){
        this.coleccionProductos = coleccionProductos;
    }
    agregarProducto(nuevoProducto){
        this.coleccionProductos.push(nuevoProducto);
    }
    eliminarProducto(id){
        let indice = 0;
        for(let i = 0; i < this.coleccionProductos.length; i++){       
            if(this.coleccionProductos[i].id == id){
                indice = i;
            }
        }
        this.coleccionProductos.splice(indice, 1);
    }
    buscarProducto(id){
        let encontrado = false;
        let indice = 0;
        for(let i = 0; i < this.coleccionProductos.length; i++){
            if(this.coleccionProductos[i].id == id){
                indice = i;
                encontrado = true;
            }
        }
        if(encontrado){
            return this.coleccionProductos[indice];
        } else {
            return null;
        }
    }
}
let p1 = new Producto(123, "Tostadora", "Electronica", 12.5, 8);
let p2 = new Producto(456, "Maceta", "Hogar", 5.50, 27);
let p3 = new Producto(789, "Laptop", "Electronica", 500, 19);
p1.actualizarCantidad(10);
p2.obtenerValorTotal();

let a1 = new Almacen([p1,p2,p3]);
console.log("EJERCICIO 2: "+a1.buscarProducto(456));

// EJERCICIO 3
//  [a-zA-Z]*[0-9]*(?=.*@)*[a-zA-Z]*\.es

// EJERCICIO 4
function palabraMasLarga(frase){
    if(typeof frase !== "string" || frase.trim().length === 0){
       return "Error: debe ingresar un texto válido.";
    }
    const palabras = frase.split(" "); "separar por espacios"
    let masLarga = palabras[0];

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > masLarga.length){
            masLarga = palabras[i];
        }
    }
    return masLarga;
}
console.log("EJERCICIO 4:"+palabraMasLarga("Hola mundo"));

// EJERCICIO 5
class Comic extends Libro{
    constructor(titulo, autor, anio, ilustrador){
        super(titulo, autor, anio); //Llama al constructor de Libro
        this.ilustrador = ilustrador;//atributo especifico de Comic
    }
}