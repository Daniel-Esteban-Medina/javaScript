//3.Crea una lista de notas. Calcula la media total y la media sólo de los aprobados. BONUS si se hace con y sin arrays.
let notas = [
    4.5, 7, 8.3, 5, 6.8
];
let sumaTotal = 0;
let sumaAprobados = 0;
for(let i = 0; i < notas.length; i++){
    sumaTotal = sumaTotal + notas[i];
    if(notas[i] >= 5){
        sumaAprobados = sumaAprobados + notas[i];
    }
}
alert("La media total es: "+(sumaTotal/notas.length));
alert("La media de los aprobados es: "+(sumaAprobados/notas.length));