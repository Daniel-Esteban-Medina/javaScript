import { Biblioteca } from "./clases/Biblioteca.js";
import { Usuario } from "./clases/Usuario.js"; 
import { Libro } from "./clases/Libro.js";
//Datos de prueba Inicio
let l1 = new Libro("Perdido en Saturno", "Mendoza Escribano", 55, "Fantasia", true);
let l2 = new Libro("500 recetas", "Juliana Medina", 37, "Cocina", true);
let u1 = new Usuario("Paco", "7TR6", "Admin", [l1, l2]);
let u2 = new Usuario("Carmen", "98TR3", "user", [l2, l1]);
console.log(u1);
console.log(l1);
let b1 = new Biblioteca([l1, l2],[u1, u2]);
//Datos de prueba FIN


let addUser = document.getElementById("addUser");
let deletUser = document.getElementById("deletUser");

addUser.addEventListener("click", function(){

});
deletUser.addEventListener("click", function(){

});

b1.printAllUsuarios();