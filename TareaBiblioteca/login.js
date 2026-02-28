import {b1} from  "./componentes/datosPrueba.js";
let boton = document.getElementById("enviar");
boton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    if(nombre != "" && pass != "" && localStorage.getItem(nombre) == null){
        localStorage.setItem(nombre, pass);
        console.log(obtenerAllStorage());
    } else {
        if(localStorage.getItem(nombre) != null){
            alert("Ese usuario ya existe");
        } else {
            alert("Por favor rellene todos los campos");
        }
    }
});

function obtenerAllStorage(){
    let arr = [];
    for(let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        arr[i] = "Clave: "+clave+"Valor: "+valor;
    }
    return arr;
}