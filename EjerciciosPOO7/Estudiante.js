class Estudiante{
    constructor(nombre, nota){
        this.nombre =nombre;
        this.nota = nota;
    }
    media(arr){
        console.log(arr.reduce((acc, valor) => acc + valor.nota) / arr.length);
    }
    aprobados(arr){
        return arr.filter(n => n.nota >= 5);
    }
    buscarPorNombre(est, nombre){
        let arr = est.filter(n => n.nombre == nombre);
        return arr[0];
    }
    actualizarNota(arr, nombre,nuevaNota){
        
    }

}
let estudiantes = [
    new Estudiante("Paco",1),
    new Estudiante("María",5),
    new Estudiante("Jose",7),
    new Estudiante("Lupe",4),
    new Estudiante("Raul",8.5)
];
console.log(aprobados(estudiantes));
