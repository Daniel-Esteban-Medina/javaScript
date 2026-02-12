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
                                    "<th>TITULO</th><th>AUTOR</th><th>numPaginas</th><th>GENERO</th><th>estaPrestado</th>"+
                                "</tr>";
        for(let i = 0; i < this.libros.length; i++){
            tablaLibros.innerHTML += "<tr>"+
                                        "<td>"+this.libros[i].titulo+
                                        "</td><td>"+this.libros[i].autor+
                                        "</td><td>"+this.libros[i].numPaginas+
                                        "</td><td>"+this.libros[i].genero+
                                        "</td><td>"+this.libros[i].estaPrestado+"</td>"+
                                    "</tr>";
        }
    }
}