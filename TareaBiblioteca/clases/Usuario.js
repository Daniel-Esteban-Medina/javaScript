export class Usuario{
    constructor(nombre, password, rol, librosPrestados){
        this.nombre = nombre;
        this.password = password; 
        this.rol = rol;
        this.librosPrestados = librosPrestados;
    }
    pedirLibro(lib){
        this.librosPrestados.push(lib);
    }
    devolverLibro(tituloLibro){
        this.librosPrestados  = this.librosPrestados.filter(lib => lib.titulo != tituloLibro); 
    }
}