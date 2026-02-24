export class Libro{
    static tiempoDevolucion = [];
    constructor(titulo, autor, numPaginas, genero, estaPrestado = false, fechaPrestamo = null, contPrestamos = 0){
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

        let diferenciaMs = (new Date()) - libro.fechaPrestamo;
        const dias = Math.floor( diferenciaMs / (1000 * 60 * 60 * 24));
        tiempoDevolucion.push(dias);

        this.fechaPrestamo = null; 
    }
}