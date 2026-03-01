import { b1, almacen } from "./componentes/datosPrueba.js";

let boton = document.getElementById("enviar");

boton.addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    let usuarioEncontrado = b1.usuarios.find(usuario => usuario.nombre == nombre && usuario.password == pass);

    if (usuarioEncontrado) {
        almacen.setUsuarioActual(usuarioEncontrado);
        if (usuarioEncontrado.rol == "admin") {
            window.location.href = "ventanasAdmin/estadisticas.html";
        } else {
            window.location.href = "ventanasUser/catalogo.html";
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});