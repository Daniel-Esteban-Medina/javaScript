let boton = document.getElementById("boton");
let busqueda = document.getElementById("busqueda");
let nombre = document.getElementById("nombre");
let dieta = document.getElementById("dieta");
let habitat = document.getElementById("habitat");
let vida = document.getElementById("vida");

async function cargarApi(){
    let respuesta = await fetch(
        "https://api.api-ninjas.com/v1/animals?name="+busqueda.value,
        {
            headers: {
                "X-Api-Key": "8KO22LnbbSdhZqWMOdmFa5WZkKaMTsZMG9bfytI1"
            }
        }
    );
    let resultado = await respuesta.json();

    crearBotones(resultado);
}

boton.addEventListener("click", function(){
    nombre.textContent = "";
    dieta.textContent = "";
    vida.textContent = "";
    habitat.textContent = "";
    cargarApi();
});

function crearBotones(resultado){
    borrarBotonesAnteriores();
    for(let i = 0; i < resultado.length; i++) {
        let newBoton = document.createElement("button");
        newBoton.textContent = resultado[i].name;
        newBoton.addEventListener("click", function(){
            nombre.textContent = resultado[i].name;
            dieta.textContent = "Dieta: "+resultado[i].characteristics.diet;
            vida.textContent = "Esperanza de vida: "+((resultado[i].characteristics.lifespan == undefined) ? "Desconocida": resultado[i].characteristics.lifespan);
            habitat.textContent = "Hábitat: "+((resultado[i].characteristics.habitat == undefined) ? "Desconocido" : resultado[i].characteristics.habitat);
        });
        document.body.appendChild(newBoton);
    }
}

function borrarBotonesAnteriores(){
    let botones = document.querySelectorAll("button");
    for(let i = 1; i < botones.length; i++){
        botones[i].remove();
    }
}