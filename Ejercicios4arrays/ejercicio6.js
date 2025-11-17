//6.Dado un array con precios, aplicar a todos un descuento indicado por prompt.
precios = [
    1.75,
    5.50,
    8.13,
    6,
    3.99
];

let descuento = Number(prompt("Introduzca el prcentaje del descuento a aplicar"));
for(let i = 0; i < precios.length; i++){
    precios[i] = precios[i] - ((precios[i]*descuento)/100);
}
console.log(precios);