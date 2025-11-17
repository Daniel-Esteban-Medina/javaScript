

    //1.Crear una calculadora de IVA.
console.log("1.Crear una calculadora de IVA.");
var num1 = Number(prompt("Ejercicio 1: Ingrese el número al que añadirle el IVA"));
console.log("El precio con el 21% de IVA del numero "+num1+"  es: "+(num1*1.21));

    //2.Se le piden al usuario tres números y se devuelve la media.
console.log("2.Se le piden al usuario tres números y se devuelve la media.");
var num1 = Number(prompt("Ejercicio 2: Ingrese el primer número para sacar la media"));
var num2 = Number(prompt("Ejercicio 2: Ingrese el segundo número para sacar la media"));
var num3 = Number(prompt("Ejercicio 2: Ingrese el tercer número para sacar la media"));

console.log("La media de "+num1+", "+num2+" y "+num3+" es: "+((num1+num2+num3)/3));
    
    //3.El usuario introduce un número y la consola indica si es par o impar.
console.log("3.El usuario introduce un número y la consola indica si es par o impar.");
var parImpar = Number(prompt("Ejercicio 3: Ingresa un número para saber si es par o no"));
console.log("El número ingresado: "+parImpar+" es "+((parImpar%2) == 0 ? "par" : "impar"));

    //4.Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.
console.log("4.Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.");
var nom1 = prompt("Ejercicio 4: Ingrese el primer nombre");
var nom2 = prompt("Ejercicio 4: Ingrese el segundo nombre");
var nom3 = prompt("Ejercicio 4: Ingrese el tercer nombre");
console.log("Los nombre introducidos son: "+nom1+", "+nom2+" y "+nom3+". "+(nom1 == nom2 || nom2 == nom3 || nom3 == nom1 ? "sí, hay al menos dos nombres repetidos" : "no, no hay al menos dos nombres repetidos"));
    
    //5.Se introduce la nota numérica del examen y devuelve categoría (suspenso, aprobado, notable…).
console.log("5.Se introduce la nota numérica del examen y devuelve categoría (suspenso, aprobado, notable…).");
var num1 = Number(prompt("Ejercicio 5: Ingrese el número, para saber la nota del examen"));
var respuesta = "Error: No se ha encontrado respuesta";
if(num1 < 5){
    respuesta = "suspenso";
}
if(num1 >= 5 && num1 < 7){
    respuesta = "aprobado";
}
if(num1 > 6 && num1 < 9){
    respuesta = "notable";
}
if(num1 > 8 && num1 < 11){
    respuesta = "sobresaliente";
}
console.log("La categoría de la nota: "+num1+" es "+respuesta);
    
    //6.Se introduce el año de nacimiento y se indica si es mayor de edad o no.
console.log("6.Se introduce el año de nacimiento y se indica si es mayor de edad o no.");
var num1 = Number(prompt("Ejercicio 6: Ingrese el año de su nacimiento."));
const añoActual = new Date().getFullYear();
console.log("Si tu año de nacimiento es "+num1+"");
    //7.Se pide el DNI y se calcula la letra. BONUS
