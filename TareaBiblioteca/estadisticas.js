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

let u1 = new Usuario("Paco", "123", "admin");
let u2 = new Usuario("Carmen", "456", "user");
let u3 = new Usuario("David", "A45B", "user");
let u4 = new Usuario("Manuel", "56YZ3", "admin");

u1.pedirLibro(l1); u1.pedirLibro(l4);
u4.pedirLibro(l1); u1.pedirLibro(l3);
u2.pedirLibro(l2);
u2.pedirLibro(l3); u2.pedirLibro(l4);
u3.pedirLibro(l3);

u1.numRetrasos = 5; u2.numRetrasos = 2; u3.numRetrasos = 1;

Libro.tiempoDevolucion.push(14); Libro.tiempoDevolucion.push(3); Libro.tiempoDevolucion.push(12); Libro.tiempoDevolucion.push(5); Libro.tiempoDevolucion.push(27); 

let b1 = new Biblioteca([l1, l2, l3, l4, l5],[u1, u2, u3, u4]);
//Datos de prueba FIN

let top5 = b1.TopLibrosPrestados().slice(0, 5);
let titulosLibs = top5.map(libro => libro.titulo);
let numPrestamos = top5.map(libro => libro.contPrestamos);

let grafico1 = document.getElementById("grafico1");
new Chart(grafico1, {
    type: "bar",
    data: {
        labels: titulosLibs,
        datasets: [{
            label: "Libros más prestados",
            data: numPrestamos
        }]
    },
});

let top4 = b1.TopUsuariosConRetrasos().slice(0, 4);
let nombresUsr = top4.map(usr => usr.nombre);
let numsRetrasos = top4.map(usr => usr.numRetrasos);

let grafico2 = document.getElementById("grafico2");
new Chart(grafico2, {
    type: "bar",
    data: {
        labels: nombresUsr,
        datasets: [{
            label: "Usuarios con más retrasos",
            data: numsRetrasos,
            backgroundColor: "rgba(255, 0, 0, 0.5)"
        }]
    },
});

let td = b1.TiemposDevolucion();

let grafico3 = document.getElementById("grafico3");
new Chart(grafico3, {
    type: "bar",
    data: {
        labels: ["MEDIANA","MEDÍA","MAXIMA","MINIMA"],
        datasets:[{
            label: "Tiempos de devolución",
            data: td,
            backgroundColor: "rgba(0, 255, 0, 0.5)"
        }]
    }
});