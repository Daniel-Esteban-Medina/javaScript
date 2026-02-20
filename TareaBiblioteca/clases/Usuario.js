export class Usuario{

    constructor(nombre, password, rol, librosPrestados, estaPenalizado = false){
        this.nombre = nombre;
        this.password = password; 
        this.rol = rol;
        this.librosPrestados = librosPrestados;
        this.estaPenalizado = estaPenalizado;
    }
    pedirLibro(lib){
        merecePenalizacion();
        if(this.estaPenalizado == false || librosPrestados.legth >= 3){
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
            if(dias > 14){
                estaPenalizado = true;
            }
        });
    }
}