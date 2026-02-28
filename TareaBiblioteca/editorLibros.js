import { Biblioteca } from "./clases/Biblioteca.js";
import { Usuario } from "./clases/Usuario.js"; 
import { Libro } from "./clases/Libro.js";
import {b1} from  "./componentes/datosPrueba.js";


let addLibro = document.getElementById("addLibro");
let deletLibro = document.getElementById("deletLibro");

addLibro.addEventListener("click", function(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let numPaginas = document.getElementById("numPaginas").value;
    let genero = document.getElementById("genero").value;
    let newLibro = new Libro(titulo, autor, numPaginas, genero);
    b1.agregarLibro(newLibro);
    b1.adminPrintAllLibros();
});
deletLibro.addEventListener("click", function(){

});

b1.adminPrintAllLibros();