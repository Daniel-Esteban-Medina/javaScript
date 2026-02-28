import { Biblioteca } from "../clases/Biblioteca.js";
import { Usuario } from "../clases/Usuario.js";
import { Libro } from "../clases/Libro.js";

let l1 = new Libro("Perdido en Saturno", "Mendoza", 55, "Fantasia");
let l2 = new Libro("500 recetas", "Juliana", 37, "Cocina");
let l3 = new Libro("JS Avanzado", "Carlos", 200, "Tecnologia");
let l4 = new Libro("Emprendimiento", "Ms.J", 123, "economia");
let l5 = new Libro("Inversión cripto", "Hacker man", 50, "economia");

let u1 = new Usuario("root", "123", "admin");
let u2 = new Usuario("Carmen", "456", "user");
let u3 = new Usuario("David", "A45B", "user");
let u4 = new Usuario("Manuel", "56YZ3", "admin");

u1.pedirLibro(l1); u1.pedirLibro(l4);
u4.pedirLibro(l1); u1.pedirLibro(l3);
u2.pedirLibro(l2);
u2.pedirLibro(l3); u2.pedirLibro(l4);
u3.pedirLibro(l3);

u1.numRetrasos = 5; 
u2.numRetrasos = 2; 
u3.numRetrasos = 1;

Libro.tiempoDevolucion.push(14, 3, 12, 5, 27);

let b1 = new Biblioteca([l1, l2, l3, l4, l5],[u1, u2, u3, u4]);

export {b1};