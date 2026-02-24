export class Usuario{

    static tiempoMaximo = 14;
    static maxLibros = 3;

    constructor(nombre, password, rol, librosPrestados = [], estaPenalizado = false, numRetrasos = 0){
        this.nombre = nombre;
        this.password = password; 
        this.rol = rol;
        this.librosPrestados = librosPrestados;
        this.estaPenalizado = estaPenalizado;
        this.numRetrasos = numRetrasos;
    }
    pedirLibro(lib){
        this.merecePenalizacion();
        if(this.estaPenalizado == false || this.librosPrestados.legth >= Usuario.maxLibros){
            lib.marcarPrestado();
            this.librosPrestados.push(lib);
            return "Prestamo concedido.";
        } else {
            return "Prestamo denegado.";
        }
    }
    devolverLibro(tituloLibro){
        this.librosPrestados  = this.librosPrestados.filter(lib => lib.titulo != tituloLibro); 
    }

    merecePenalizacion(){
        this.librosPrestados.forEach(libro => {
            let diferenciaMs = (new Date()) - libro.fechaPrestamo;
            const dias = Math.floor( diferenciaMs / (1000 * 60 * 60 * 24));
            if(dias > Usuario.tiempoMaximo){
                this.estaPenalizado = true;
            }
        });
        return this.estaPenalizado;
    }
}