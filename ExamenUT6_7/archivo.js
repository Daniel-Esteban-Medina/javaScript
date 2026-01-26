// Ejercicio 1
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const botonAdd = document.getElementById("addButton");
let indice = 0;

botonAdd.addEventListener("click", function(){
if(inputTarea.value != ""){
    let newLi = document.createElement("li");
    newLi.innerHTML = inputTarea.value+" <button id='b"+indice+"'>Borrar</button>"; 
    lista.append(newLi);
    const newBoton = document.getElementById("b"+indice);
    newBoton.addEventListener("click", function(){
        lista.removeChild(newLi);
    });

    const lis = document.querySelectorAll('li');
    lis.forEach(li=>{
        li.addEventListener("click", function(){
            li.style.backgroundColor = "red";
        });
    });
    indice += 1;
} else {
    alert("El nombre de la tarea esta vacio.");
}
});

// Ejercicio 2
const botonAct = document.getElementById("botonActivar");
const parrafo = document.getElementById("parrafo");

botonAct.addEventListener("click", function(){
    if(botonAct.textContent == "Activar"){
        botonAct.textContent = "Desactivar";
    } else {
        botonAct.textContent = "Activar";
    }
});

parrafo.addEventListener("mouseenter", function(){
    if(botonAct.textContent == "Activar"){
        parrafo.className = "estilo1";
    }    
});
parrafo.addEventListener("mouseleave", function(){
    if(botonAct.textContent == "Activar"){
        parrafo.className = "";
    }
});
parrafo.addEventListener("click", function(){
    if(botonAct.textContent == "Activar"){
        parrafo.className = "estilo2";
    }
});