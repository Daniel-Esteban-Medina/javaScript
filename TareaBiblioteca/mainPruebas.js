import { Usuario } from "./Usuario.js"; 
import { Libro } from "./Libro.js";
let l1 = new Libro("Perdido en Saturno", "Mendoza Escribano", 55, "Fantasia", true);
let l2 = new Libro("500 recetas", "Juliana Medina", 37, "Cocina", true);
let u1 = new Usuario("Paco", "7TR6", "Admin", [l1, l2]);
console.log(u1);
console.log(l1);