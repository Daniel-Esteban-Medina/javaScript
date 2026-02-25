import { Usuario } from "./clases/Usuario.js"; 
import { Libro } from "./clases/Libro.js";
import { Biblioteca } from "./clases/Biblioteca.js";
//(libros más prestados, usuarios con más retrasos, tiempo medio de devolución…)

// Datos de prueba INICIO
let l1 = new Libro("Perdido en Saturno", "Mendoza", 55, "Fantasia");
let l2 = new Libro("500 recetas", "Juliana", 37, "Cocina");
let l3 = new Libro("JS Avanzado", "Carlos", 200, "Tecnologia");
let l4 = new Libro("Emprendimiento", "Ms.J", 123, "economia");
let l5 = new Libro("Inversión cripto", "Hacker man", 50, "economia");

let u1 = new Usuario("Paco", "123", "Admin");
let u2 = new Usuario("Carmen", "456", "user");

u1.pedirLibro(l1); u1.pedirLibro(l4);
u1.pedirLibro(l1); u1.pedirLibro(l3);
u2.pedirLibro(l2);
u2.pedirLibro(l3); u2.pedirLibro(l4);
u2.pedirLibro(l3);

let b1 = new Biblioteca([l1, l2, l3, l4, l5],[u1, u2]);
//Datos de prueba FIN

let top5 = b1.TopLibrosPrestados().slice(0, 5);
let titulosLibs = top5.map(libro => libro.titulo);
let numPrestamos = top5.map(libro => libro.contPrestamos);

let grafico = document.getElementById("grafico1");
new Chart(grafico, {
    type: "bar",
    data: {
        labels: titulosLibs,
        datasets: [{
            label: "Libros más prestados",
            data: numPrestamos
        }]
    },
});