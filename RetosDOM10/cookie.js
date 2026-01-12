//Reto (bis)
//Modificamos el ejercicio de la preferencia de tema con localStorage para almacenarla como cookie.
//*Si no ponemos max-age (en segundos) o expires (en formato Date) la cookie será de sesión (se elimina cuando cerremos navegador).


const p = document.querySelectorAll("p");
const body = document.body;
let nombre = prompt("¿Cual es su nombre?");
if(getValorCookie(nombre) == undefined){ //No hay nombres guardados o es un nuevo nombre
    let tema = prompt("¿Quiere el tema claro o oscuro?");
    setCookie(nombre,tema);
    cambioTema(tema);
} else { //Es un nombre guardado
    cambioTema(getValorCookie(nombre));
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
function setCookie(nombre, valor){
    document.cookie = nombre+"="+valor+"; max-age=9999999";
}
function getValorCookie(nombre){
    let cookies = document.cookie.split(";");
    let valor;
    for(let i = 0; i < cookies.length; i++){
        let temp = cookies[i].split("=");
        if(temp[0].trim() == nombre){  // trim() quita los espacios que hay
            valor = temp[1];
        }
    }
    return valor;
}