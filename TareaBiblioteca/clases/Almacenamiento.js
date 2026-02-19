export class Almacenamiento{
    //arrays
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
}