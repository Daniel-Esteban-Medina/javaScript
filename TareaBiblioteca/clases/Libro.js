export class Libro{
    constructor(titulo, autor, numPaginas, genero, estaPrestado, fechaPrestamo = null){
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.genero = genero;
        this.estaPrestado = estaPrestado;
        this.fechaPrestamo = fechaPrestamo;
    }
    marcarPrestado(){
        this.estaPrestado = true;
        this.fechaPrestamo = new Date();
    }
    marcarDevuelto(){
        this.estaPrestado = false;
        this.echaPrestamo = null;
    }
}