// 1- Crea un html con varias etiquetas de muestra. La página pedirá que se introduzca una etiqueta y 
// saldrá por consola todo el contenido de las etiquetas señaladas.
const respuesta = prompt("introduce una etiqueta.");
const etiqueta = document.getElementsByTagName(respuesta);
for (let item of etiqueta) {
    console.log(item.innerHTML);
}