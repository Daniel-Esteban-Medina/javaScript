export class Usuario{

    static tiempoMaximo = 14;
    static maxLibros = 3;

    constructor(nombre, password, rol, librosPrestados, estaPenalizado = false, numRetrasos = 0){
        this.nombre = nombre;
        this.password = password; 
        this.rol = rol;
        this.librosPrestados = librosPrestados;
        this.estaPenalizado = estaPenalizado;
    }
    pedirLibro(lib){
        merecePenalizacion();
        if(this.estaPenalizado == false || librosPrestados.legth >= maxLibros){
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
        librosPrestados.forEach(libro => {
            let diferenciaMs = (new Date()) - libro.fechaPrestamo;
            const dias = Math.floor( diferenciaMs / (1000 * 60 * 60 * 24));
            if(dias > tiempoMaximo){
                estaPenalizado = true;
            }
        });
        return this.estaPenalizado;
    }
}