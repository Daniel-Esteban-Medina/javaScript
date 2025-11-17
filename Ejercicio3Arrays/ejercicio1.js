//Ejercicio 1: Se le pide al usuario el número de valores a introducir. Posteriormente se le van pidiendo. Se le devuelven ordenados. ¿Cómo? 😮
let cantidadNum = Number(prompt("Introduce la cantidad de números que vas a introducir."));
let numeros = [];
for(let i = 0; i < cantidadNum; i++){
    numeros[i] = prompt("Introduce número");
}
console.log(numeros.sort());