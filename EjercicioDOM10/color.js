const p = document.querySelectorAll("p");
const body = document.body;
let nombre = prompt("¿Cual es su nombre?");
if(localStorage.length == 0 || localStorage.getItem(nombre) == null){ //No hay nombres guardados o es un nuevo nombre
    let tema = prompt("¿Quiere el tema claro o oscuro?");
    localStorage.setItem(nombre,tema);
    cambioTema(tema);
} else { //Selecciono un nombre guardado
    cambioTema(localStorage.getItem(nombre));
}
function cambioTema(tema){
    if(tema == "claro"){
        p.forEach(elemento => {
            elemento.className = "resaltado1";
        });
        body.classList.add(tema);
    } else {
        p.forEach(elemento => {
            elemento.className = "resaltado2";
        });
        body.classList.add(tema);
    }
}