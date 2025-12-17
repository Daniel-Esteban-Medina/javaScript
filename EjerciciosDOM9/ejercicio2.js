// 2- Añade a una página un h1 que no existiera en HTML con un título.
let titulo = "EJERCICIO 2";
let nuevaEtiqueta = document.createElement('h1');
nuevaEtiqueta.textContent = titulo;
document.body.appendChild(nuevaEtiqueta);