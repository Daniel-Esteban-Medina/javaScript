// 1_2_3. Creamos un programa que pida números hasta que insertemos un 0, enconces nos indica la longitud del array
let array = [];
let respuesta;
while(respuesta != 0){
    respuesta = Number(prompt("Inserte número"));
    if(respuesta != 0){
        array.push(respuesta);
    }
}
alert("Longitud del array: "+array.length);

//busca 5 como caracter aislado
// array.includes() verificar si un array contiene un elemento específico. Devuelve true o false.
alert("Hay algún 5 como caracter aislado en array: " + (array.includes(5) ? " sí, hay algún 5 en el array." : " no, no hay ningun 5 en el array."));

//buscar 5 no como caracter aislado
// array.some() verifica si al menos un elemento del array cumple una condición específica. Devuelve true o false
// usa callback es decir (elemento => elemento.condición) EJEMPLO: num => num > 3
let cinco = array.some(num => num.toString().includes("5"));
if(cinco){
    alert("Hay algún 5 como caracter no aislado en array:  sí, hay algún 5 en el array.");
} else {
    alert("Hay algún 5 como caracter  no aislado en array:  no, no hay ningun 5 en el array.");
}

//3.Pedir un número al usuario e indicar cuántas veces aparece en el array anterior.
respuesta = Number(prompt("Inserte número"));
let cantidad = array.filter(e => e == respuesta).length;
alert("El número "+respuesta+" se repite "+cantidad);