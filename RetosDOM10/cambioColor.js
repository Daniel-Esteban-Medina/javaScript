//Intentamos hacer un prompt que nos pida el color de la fuente del texto en la página?
const color = prompt("¿De que color quieres el texto?");
const p = document.querySelectorAll('p');
p.forEach(element=>{
    element.style.color = color;
});