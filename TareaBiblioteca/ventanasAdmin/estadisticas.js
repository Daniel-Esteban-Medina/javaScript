import { Usuario } from "../clases/Usuario.js"; 
import { Libro } from "../clases/Libro.js";
import { Biblioteca } from "../clases/Biblioteca.js";
import {b1, almacen} from  "../componentes/datosPrueba.js";

almacen.cargarStaticsValues();

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