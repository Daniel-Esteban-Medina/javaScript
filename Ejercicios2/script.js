//1.Calculadora de áreas y perímetros de un cuadrado.
console.log("Ejercicio 1");
let lado1 = 3;
console.log("El perimetro del cuadrado es: "+(lado1+lado1+lado1+lado1));
console.log("El área del cuadrado es: "+(lado1*lado1));

//2.Detector de números mágicos. Número 4 dígitos, la suma del primer y último dan los dos del medio.
console.log("Ejercicio 2");
let numeroString = "9189";
let digitos = numeroString.split('');
let digitosElMedioString = digitos[1] + digitos[2];
let digitosElMedioInt = parseInt(digitosElMedioString);
let sumaDigito1y4 = parseInt(digitos[0]) + parseInt(digitos[3]);
console.log("El número: "+numeroString+((sumaDigito1y4 == digitosElMedioInt) ? " es un número magico." : " no es un número magico."));

//3.Crea un programa que “cuente” la cantidad de dígitos de un número (sin funciones).
console.log("Ejercicio 3");
let numero = "2004";
for(let i = 0; i < numero.length; i ++){
    console.log((i + 1)+(i > 0 ? " Digitos." : " Digito."));
}

//4.Mostrar los números pares del 1 al 100.
console.log("Ejercicio 4");
for(let i = 1; i <= 100; i++){
console.log((i % 2) == 0 ? i : "");
}

//5.Se le pide al usuario el número de elementos que va a introducir para calcular su media.
console.log("Ejercicio 5");
let numNumeros = Number(prompt("Calcular media, ejercicio 5: Ingrese el número de números que va a introducir."));
let suma = 0;
for(let i = 0; i < numNumeros; i++){
    suma = suma + Number(prompt("Ejercicio 5: Ingrese los números"));
}
console.log("La media de los números introducidos es: "+(suma/numNumeros));

//6.El adivinador: Crear un código que adivine un número del 1 al 100.
let numAdivinar = Number(prompt("Ejercicio 6: Ingrese el número que tiene que adivinar el código"));
let contador = 0;
let numPC = 0;
while(numAdivinar != numPC){
    numPC = Math.floor(Math.random() * 100); 
    contador = contador + 1;
}
console.log("El número del usuario era "+numPC+". Esto ha costado adivinarlo "+contador+" intentos");

//7.Jugando un poco con la consola: Aventura conversacional/juego de preguntas y respuestas.
console.log("Ejercicio 7 Aventura conversacional");
let local = prompt("Ejercicio 7 Aventura conversacional: Estás en un centro Comercial y toca elegir en que local comer. A la vista tan solo hay tres locales. SELECCIONE UNO: bar/burger/pizería");
let tipoComida = "";
switch(local){
    case "bar":
        tipoComida = "tortilla de patatas " + prompt("Te apetece una tortilla de patatas, ¿Pero cuál?. SELECCIONE: con cebolla/sin cebolla");
    break;
    case "burger":
        tipoComida = "hamburgesa " + prompt("Te apetece una hamburgesa con patatas, ¿Pero cuál?. SELECCIONE: de pollo/de ternera");
    break;
    case "pizería":
        tipoComida = "pizza " + prompt("Te apetece una pizza con salsa, ¿Pero cuál?. SELECCIONE: barbacoa/margarita");
    break;
}
console.log("Resultados de la Aventura conversacional. Comiste en "+local+" una "+tipoComida);
//8.Crear un menú contextual. Se repite hasta que el usuario elige la opción “Salir”.

//9.Crear el juego de piedra papel o tijera. (Podemos investigar math.random()).
console.log("9.Crear el juego de piedra papel o tijera. (Podemos investigar math.random()).");
let usuario = "";
let pc = 0;
let resultado = "";
for(let i = 0; i <= 2; i++){
    console.log("Ronda "+(i+1));
    usuario = prompt("Ejercicio 9: vamos a jugar 3 rondas al piedra, papel o tijera. SELECCIONA: piedra/papel/tijera");
    //pc = 0 es piedra, pc = 1 es tijera, pc = 2 es papel
    pc = Math.floor(Math.random() * 2); 
    if(usuario == "piedra"){
        switch(pc){
            case 0:
                resultado = "USUARIO -> PIEDRA   PC -> PIEDRA | EMPATE";
            break;
            case 1:
                resultado = "USUARIO -> PIEDRA   PC -> TIJERA | GANASTE";
            break;
            case 2:
                resultado = "USUARIO -> PIEDRA   PC -> PAPEL | PERDISTE";
            break;
        }
    }
    if(usuario == "papel"){
        switch(pc){
            case 0:
                resultado = "USUARIO -> PAPEL   PC -> PIEDRA | GANASTE";
            break;
            case 1:
                resultado = "USUARIO -> PAPEL   PC -> TIJERA | PERDISTE";
            break;
            case 2:
                resultado = "USUARIO -> PAPEL   PC -> PAPEL | EMPATE";
            break;
        }
    }
    if(usuario == "tijera"){
        switch(pc){
            case 0:
                resultado = "USUARIO -> TIJERA   PC -> PIEDRA | PERDISTE";
            break;
            case 1:
                resultado = "USUARIO -> TIJERA   PC -> TIJERA | EMPATE";
            break;
            case 2:
                resultado = "USUARIO -> TIJERA   PC -> PAPEL | GANASTE";
            break;
        }
    }
    console.log(resultado);
}

//10.Mostrar los primeros 100 números primos.
console.log("Ejerciio 10");

//11.Bonus NAVASESH