import { Libro } from "./Libro.js";
import { Usuario } from "./Usuario.js";

export class Almacenamiento{
    getUsuarios(){
        return JSON.parse(localStorage.getItem("usuarios"));
    }
    setUsuarios(usuarios){
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    getLibros(){
        return JSON.parse(localStorage.getItem("libros"));
    }
    setLibros(libros){
        localStorage.setItem("libros", JSON.stringify(libros));
    }
    setUsuarioActual(usuarioActual){
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
    }
    getUsuarioActual(){
        return JSON.parse(localStorage.getItem("usuarioActual"));
    }
    deObjPlanoAinstancia(biblio){
        biblio.usuarios = biblio.usuarios.map(u => 
            new Usuario(u.nombre, u.password, u.rol, u.librosPrestados, u.estaPenalizado, u.numRetrasos)
        );
        biblio.libros = biblio.libros.map(l => 
            new Libro(l.titulo, l.autor, l.numPaginas, l.genero, l.estaPrestado, l.fechaPrestamo, l.contPrestamos)
        );
    }
    cargarStaticsValues(){
        Libro.tiempoDevolucion = JSON.parse(localStorage.getItem("tiemposDevolucion")) || [];
        Usuario.tiempoMaximo = JSON.parse(localStorage.getItem("tiempoMaximo")) || 14;
        Usuario.maxLibros = JSON.parse(localStorage.getItem("maxLibros")) || 3;
    }
    setUsrStaticsValues(usrTiempoMax, usrMaxLibros){
        localStorage.setItem("tiempoMaximo", JSON.stringify(usrTiempoMax));
        localStorage.setItem("maxLibros", JSON.stringify(usrMaxLibros));
    }
    setLibStaticValue(libTiempos){
        localStorage.setItem("tiemposDevolucion", JSON.stringify(libTiempos));
    }
}