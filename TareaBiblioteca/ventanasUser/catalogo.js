import { Usuario } from "../clases/Usuario.js"; 
import { Libro } from "../clases/Libro.js";
import { Biblioteca } from "../clases/Biblioteca.js";
import { b1 } from "../componentes/datosPrueba.js";
b1.printAllLibros();
let botonVer = document.getElementById("verDetalle");
botonVer.addEventListener("click", function(){
    let tituloSeleccionado = document.getElementById("titulo").value;
    if(tituloSeleccionado != ""){
        localStorage.setItem("libroDeseado", tituloSeleccionado);
        window.location.href = "detalleLibro.html";
    }
});