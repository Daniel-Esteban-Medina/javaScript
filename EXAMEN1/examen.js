// Ejercicio 1
let array = [1,2,3,3,4,2];
let arrayTemp = array;
let masDeUnaVez = 0;
for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if(arrayTemp[j] == array[i]){
            masDeUnaVez = masDeUnaVez + 1;
        } 
        if(arrayTemp[j] == array[i] && masDeUnaVez > 1){
            arrayTemp.splice(j, 1);
        }
    }
    masDeUnaVez = 0;
}
console.log("EJERCICIO 1 \n"+arrayTemp);

// Ejercicio 2
let respuesta = 999;
let nums = [];
while(respuesta != 0){
    respuesta = Number(prompt("EJERCICIO 2: introduce números enteros y positivos"));
    if(respuesta < 0){
        alert("Formato no valido. Introduce números enteros y positivos");
    } else {
        nums.push(respuesta);
    }
}
alert("EJERCICIO 2: la suma de todos los números pares introducidos es "+nums.reduce((acc, valor) => ((valor % 2) == 0 ? (acc + valor) : (acc = acc))));

// Ejercicio 3
let tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let respuesta2 = Number(prompt("EJERCICIO 3: introduce el número de la tabal de multiplicar que quieres ver"));
alert(tabla.map(num => num * respuesta2));

// Ejercicio 4
let respuesta3 = Number(prompt("EJERCICIO 4: introduce un número para ver su factorial"));
let factorial = [];
let temporal = respuesta3;
for(let i = 0; i < respuesta3; i++){
    if(i == 0){
        factorial.push(respuesta3);
    } else {
        temporal = temporal - 1;
        factorial.push(temporal);
    }
}
alert("EJERCICIO 4: el factorial del número introducido es "+factorial.reduce((acc, valor) => acc * valor));

// EJERCICIO 5
let respuesta4 = Number(prompt("EJERCICIO 5: introduce un número para contar sus digitos"));
let digitos = respuesta4.toString();
if(respuesta4 > 0){
    alert("EJERCICIO 5: el numero introducido tiene "+digitos.length+" digitos");
} else {
    alert("EJERCICIO 5: el numero introducido tiene "+(digitos.length - 1)+" digitos");
}