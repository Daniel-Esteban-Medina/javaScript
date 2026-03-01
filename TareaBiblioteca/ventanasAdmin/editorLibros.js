import { b1, almacen } from "../componentes/datosPrueba.js";
import { Libro } from "../clases/Libro.js";

let addLibro = document.getElementById("addLibro");
let deletLibro = document.getElementById("deletLibro");

addLibro.addEventListener("click", function(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let numPaginas = document.getElementById("numPaginas").value;
    let genero = document.getElementById("genero").value;
    let newLibro = new Libro(titulo, autor, numPaginas, genero);
    b1.agregarLibro(newLibro);
    almacen.setLibros(b1.libros);
    b1.adminPrintAllLibros();
});

deletLibro.addEventListener("click", function(){
    let tituloDel = document.getElementById("TituloDel").value;
    b1.libros = b1.libros.filter(l => l.titulo != tituloDel);
    almacen.setLibros(b1.libros);
    b1.adminPrintAllLibros();
});

b1.adminPrintAllLibros();