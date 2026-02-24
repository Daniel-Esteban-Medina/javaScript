import { Usuario } from "./clases/Usuario.js"; 
import { Libro } from "./clases/Libro.js";
import { Biblioteca } from "./clases/Biblioteca.js";
//(libros más prestados, usuarios con más retrasos, tiempo medio de devolución…)

//Datos de prueba Inicio
let l1 = new Libro("Perdido en Saturno", "Mendoza Escribano", 55, "Fantasia", true);
let l2 = new Libro("500 recetas", "Juliana Medina", 37, "Cocina", true);
let u1 = new Usuario("Paco", "7TR6", "Admin");
let u2 = new Usuario("Carmen", "98TR3", "user");
u1.pedirLibro(l1);
u2.pedirLibro(l2);
console.log(u1);
console.log(l1);
let b1 = new Biblioteca([l1, l2],[u1, u2]);
b1.registrarUsuario();
//Datos de prueba FIN

top5 = b1.TopLibrosPrestados.slice(0, 5);

let grafico = document.getElementById("grafico");
new CharacterData(grafico, {
    type: "bar",
    data: {

    }
});