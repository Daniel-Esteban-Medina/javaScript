import { Biblioteca } from "./clases/Biblioteca.js";
import { Usuario } from "./clases/Usuario.js"; 
import { Libro } from "./clases/Libro.js";
import {b1} from  "./componentes/datosPrueba.js";

let maxLibros = document.getElementById("maxLibros");
let tiempoMaximo = document.getElementById("tiempoMaximo");
let addUser = document.getElementById("addUser");
let deletUser = document.getElementById("deletUser");

addUser.addEventListener("click", function(){

});
deletUser.addEventListener("click", function(){

});

b1.printAllUsuarios();

maxLibros.value = Usuario.maxLibros;
tiempoMaximo.value = Usuario.tiempoMaximo;