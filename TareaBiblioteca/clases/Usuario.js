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
        const libro =  this.librosPrestados.find(lib => lib.titulo == tituloLibro); 
        if(this.diasDesdePrestamo(libro) > Usuario.tiempoMaximo){
            this.numRetrasos ++;
        }   
        libro.marcarDevuelto();
        this.librosPrestados  = this.librosPrestados.filter(lib => lib.titulo != tituloLibro); 
    }

    merecePenalizacion(){
        this.librosPrestados.forEach(libro => {            
            if(this.diasDesdePrestamo(libro) > Usuario.tiempoMaximo){
                this.estaPenalizado = true;
            }
        });
        return this.estaPenalizado;
    }

    diasDesdePrestamo(libro){
        let diferenciaMs = (new Date()) - libro.fechaPrestamo;
        return Math.floor( diferenciaMs / (1000 * 60 * 60 * 24));
    }
}