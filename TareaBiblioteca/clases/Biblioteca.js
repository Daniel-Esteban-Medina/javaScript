export class Biblioteca{
    constructor(libros, usuarios){
        this.libros = libros;
        this.usuarios = usuarios;
    }
    registrarUsuario(){

    }
    agregarLibro(lib){
        this.libros.push(lib);
    }
    buscarLibro(){

    }
    realizarPrestamo(){
        
    }
    printAllLibros(){
        let tablaLibros = document.getElementById("TablaLibros");
        tablaLibros.innerHTML = "<tr>"+
                                    "<th>TITULO</th><th>AUTOR</th><th>GENERO</th>"+
                                "</tr>";
        for(let i = 0; i < this.libros.length; i++){
            tablaLibros.innerHTML += "<tr>"+
                                        "<td>"+this.libros[i].titulo+
                                        "</td><td>"+this.libros[i].autor+
                                        "</td><td>"+this.libros[i].genero+"</td>"+
                                    "</tr>";
        }
    }
    printAllUsuarios(){
        let tablaUsuarios = document.getElementById("tablaUsuarios");
        tablaUsuarios.innerHTML = "<tr>"+
                                    "<th>NOMBRE</th><th>CONTRASEÑA</th><th>ROL</th><th>NumLibros</th><th>estaPenalizado</th>"+
                                "</tr>";
        for(let i = 0; i < this.libros.length; i++){
            tablaUsuarios.innerHTML += "<tr>"+
                                        "<td>"+this.usuarios[i].nombre+
                                        "</td><td>"+this.usuarios[i].password+
                                        "</td><td>"+this.usuarios[i].rol+
                                        "</td><td>"+this.usuarios[i].librosPrestados.length+
                                        "</td><td>"+this.usuarios[i].merecePenalizacion()+"</td>"+
                                    "</tr>";
        }
    }
}