class Estudiante{
    constructor(nombre, nota){
        this.nombre =nombre;
        this.nota = nota;
    }
    static media(arr){
        console.log(arr.reduce((acc, valor) => acc + valor.nota, 0) / arr.length);
    }
    static aprobados(arr){
        return arr.filter(n => n.nota >= 5);
    }
    static buscarPorNombre(est, nombre){
        let arr = est.filter(n => n.nombre == nombre);
        return arr[0];
    }
    static actualizarNota(arr, nombre,nuevaNota){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].nombre == nombre){
                arr[i].nota = nuevaNota;
            }
        }
    }
}
let estudiantes = [
    new Estudiante("Paco",1),
    new Estudiante("María",5),
    new Estudiante("Jose",7),
    new Estudiante("Lupe",4),
    new Estudiante("Raul",8.5)
];
console.log(Estudiante.aprobados(estudiantes));
Estudiante.media(estudiantes);
console.log(Estudiante.buscarPorNombre(estudiantes,"Jose"));
Estudiante.actualizarNota(estudiantes,"Lupe",2);
console.log(estudiantes);