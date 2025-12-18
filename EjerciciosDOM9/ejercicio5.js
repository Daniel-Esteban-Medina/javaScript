// 5- Crea una lista con tres elementos, selecciona el elemento del medio y muestra por consola el hermano anterior y el hermano siguiente.
let lista = document.querySelectorAll('ul li');
let indiceMedio = Math.floor(lista.length / 2);
let elementoMedio = lista[indiceMedio];
let elementoAnterior = elementoMedio.previousElementSibling;
let elementoPosterior = elementoMedio.nextElementSibling;

console.log("MEDIO: "+elementoMedio.textContent);
console.log("ANTERIOR: "+elementoAnterior.textContent);
console.log("POSTERIOR: "+elementoPosterior.textContent);