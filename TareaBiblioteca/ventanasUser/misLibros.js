import { almacen, b1 } from "../componentes/datosPrueba.js";
import { Usuario } from "../clases/Usuario.js";

let datos = almacen.getUsuarioActual();
let user = new Usuario(datos.nombre, datos.password, datos.rol, datos.librosPrestados, datos.estaPenalizado, datos.numRetrasos);
user.tusLibros();

document.getElementById("devolver").addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    user.devolverLibro(titulo);
    almacen.setUsuarioActual(user);
    let libroGlobal = b1.libros.find(l => l.titulo == titulo);
    if(libroGlobal != undefined){
        libroGlobal.estaPrestado = false;
    }
    almacen.setLibros(b1.libros);
    alert("Libro devuelto correctamente");
    location.reload();
});