const respuesta = prompt("introduce una etiqueta.");
const etiqueta = document.getElementsByTagName(respuesta);
for (let item of etiqueta) {
    console.log(item.innerHTML);
}