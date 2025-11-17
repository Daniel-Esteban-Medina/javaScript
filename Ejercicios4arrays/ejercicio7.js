// BONUS: Reutiliza el ejercicio 1 y posteriormente devuelve el array ordenado.
let array = [];
let respuesta;
while(respuesta != 0){
    respuesta = Number(prompt("Inserte número"));
    if(respuesta != 0){
        array.push(respuesta);
    }
}
alert("Longitud del array: "+array.length);
array.sort((a, b) => a - b);
alert("array ordenado: "+array);