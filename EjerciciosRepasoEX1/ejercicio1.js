// Conversor DEC a HEX
let deci = Number(prompt("Ingrese el número decimal"));
let hexa = new Map([
    [10, "A"], 
    [11, "B"], 
    [12, "C"], 
    [13, "D"], 
    [14, "E"], 
    [15, "F"]
]);
let respuesta = "";
let restos = [];
let cociente = deci;
while(cociente != 0){
    restos.push(cociente % 16);
    cociente = parseInt(cociente / 16);
}
restos.reverse();
for(let i = 0; i < restos.length; i++){
    if(restos[i] > 9){
        respuesta = respuesta + hexa.get(restos[i]);
    } else {
    respuesta = respuesta + restos[i];
    }
}
alert("El número decimal "+deci+" sería en hexadecimal "+respuesta);