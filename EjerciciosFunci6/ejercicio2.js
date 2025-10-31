// 2.Función calculadora de número factorial.
let numero = 5;
function calFacto(numero){
let factorial = [];
let temporal = numero;
for(let i = 0; i < numero; i++){
    if(i == 0){
        factorial.push(numero);
    } else {
        temporal = temporal - 1;
        factorial.push(temporal);
    }
}
    return factorial.reduce((acc, valor) => acc * valor);
}
alert("El factorial de "+numero+" es "+calFacto(numero));