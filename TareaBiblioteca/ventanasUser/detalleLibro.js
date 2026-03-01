import { b1, almacen } from "../componentes/datosPrueba.js";
import { Usuario } from "../clases/Usuario.js";

let tituloBuscado = localStorage.getItem("libroDeseado");
let libro = b1.libros.find(l => l.titulo === tituloBuscado);

if(libro != undefined) {
    document.getElementById("titulo").innerText = libro.titulo;
    document.getElementById("autor").innerText = libro.autor;
    document.getElementById("estadoLibro").innerText = libro.estaPrestado ? "Prestado" : "Disponible";
}

document.getElementById("pedirLibro").addEventListener("click", () => {
    let datosUser = almacen.getUsuarioActual();
    let userActual = new Usuario(datosUser.nombre, datosUser.password, datosUser.rol, datosUser.librosPrestados, datosUser.estaPenalizado, datosUser.numRetrasos);

    if (libro.estaPrestado) {
        alert("El libro ya está prestado.");
        return;
    }

    let mensaje = userActual.pedirLibro(libro);
    alert(mensaje);

    if (mensaje == "Prestamo concedido.") {
        almacen.setLibros(b1.libros);
        let index = b1.usuarios.findIndex(u => u.nombre == userActual.nombre);
        b1.usuarios[index] = userActual;
        almacen.setUsuarios(b1.usuarios);
        almacen.setUsuarioActual(userActual);
        window.location.href = "misLibros.html";
    }
});