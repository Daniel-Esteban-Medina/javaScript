//4.En un programa con un array predefinido con varios nombres, pedirle uno al usuario y comprobar si está o no.
let nombres = [
    "Jose",
    "Paco",
    "Luisa"
];
let respuesta = prompt("Dame un nombre");
if(nombres.includes(respuesta)){
    alert("Ese nombre esta");
} else {
    alert("Ese nombre no esta");
}