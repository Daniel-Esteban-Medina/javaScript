// 4- Dada una lista de la compra (ol), pide por prompt elementos para ir añadiéndolos (li). 
// El usuario debe indicar si añadirlos al inicio o al final de la lista.
let lista = document.getElementById('listaCompra');
let newElement = document.createElement('li');
newElement.textContent = prompt("Introduce elemento a añadir a la lista.");
let primero = confirm("¿Quiere que ese elemento vaya al principio?");
if(primero){
    lista.prepend(newElement);
} else {
    lista.appendChild(newElement);
}