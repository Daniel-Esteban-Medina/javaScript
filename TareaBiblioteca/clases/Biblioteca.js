import { Libro } from "./Libro.js";

export class Biblioteca{
    constructor(libros = [], usuarios = []){
        this.libros = libros;
        this.usuarios = usuarios;
    }
    registrarUsuario(usr){
        this.usuarios.push(usr)
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
    adminPrintAllLibros(){
        let tablaLibros = document.getElementById("TablaLibros");
        tablaLibros.innerHTML = "<tr>"+
                                    "<th>TITULO</th><th>AUTOR</th><th>GENERO</th><th>numPaginas</th><th>estaPrestado</th><th>fechaPrestamo</th><th>contPrestamos</th>"+
                                "</tr>";
        for(let i = 0; i < this.libros.length; i++){
            let fecha = new Date(this.libros[i].fechaPrestamo).toLocaleDateString("es-ES");
            fecha = (fecha == "1/1/1970") ? "no tiene" : fecha;
            tablaLibros.innerHTML += "<tr>"+
                                        "<td>"+this.libros[i].titulo+
                                        "</td><td>"+this.libros[i].autor+
                                        "</td><td>"+this.libros[i].genero+
                                        "</td><td>"+this.libros[i].numPaginas+
                                        "</td><td>"+this.libros[i].estaPrestado+
                                        "</td><td>"+fecha+
                                        "</td><td>"+this.libros[i].contPrestamos+"</td>"+
                                    "</tr>";
        }
    }
    printAllUsuarios(){
        let tablaUsuarios = document.getElementById("tablaUsuarios");
        tablaUsuarios.innerHTML = "<tr>"+
                                    "<th>NOMBRE</th><th>CONTRASEÑA</th><th>ROL</th><th>NumLibros</th><th>estaPenalizado</th><th>numRetrasos</th>"+
                                "</tr>";
        for(let i = 0; i < this.usuarios.length; i++){
            tablaUsuarios.innerHTML += "<tr>"+
                                        "<td>"+this.usuarios[i].nombre+
                                        "</td><td>"+this.usuarios[i].password+
                                        "</td><td>"+this.usuarios[i].rol+
                                        "</td><td>"+this.usuarios[i].librosPrestados.length+
                                        "</td><td>"+this.usuarios[i].merecePenalizacion()+
                                        "</td><td>"+this.usuarios[i].numRetrasos+"</th>"+
                                    "</tr>";
        }
    }

    TopLibrosPrestados(){
        return this.libros.sort((a, b) =>  b.contPrestamos - a.contPrestamos);
    }
    TopUsuariosConRetrasos(){
        return this.usuarios.sort((a, b) =>  b.numRetrasos - a.numRetrasos);
    }
    TiemposDevolucion(){
        let prestamosEnTotal = 0;
        this.libros.forEach(libro => {
            prestamosEnTotal += libro.contPrestamos;
        });
        let tiempos = Libro.tiempoDevolucion.reduce((acumulador, valorActual) => acumulador + valorActual);
        let media = Math.floor(tiempos / prestamosEnTotal);

        let arrOrder = Libro.tiempoDevolucion.sort((a, b) => a - b);
        let mediana = arrOrder[Math.floor(Libro.tiempoDevolucion.length / 2)];

        let maxima = arrOrder[Libro.tiempoDevolucion.length - 1];
        let minima = arrOrder[0];

        return [mediana, media, maxima, minima];
    }
}