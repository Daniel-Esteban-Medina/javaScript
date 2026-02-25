let boton = document.getElementById("boton");
async function obtenerDatos(){
    let nombre = document.getElementById("nombre").value;
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombre);
    pokemon = await respuesta.json();
    console.log(pokemon);
    let name = pokemon.name;
    let tipo1 = tr[pokemon.types["0"].type.name];
    let tipo2 = (pokemon.types["1"] == undefined) ? "" : tr[pokemon.types["1"].type.name];
    let sonido = new Audio(pokemon.cries.latest);

    let imagen = pokemon.sprites.front_default;
    let img = document.createElement("div");
    img.innerHTML = "<img src='"+imagen+"'></img>";
    document.body.appendChild(img);

    console.log("nombre: "+name+((tipo2 == "") ? " tipo: "+tipo1 : " tipos: "+tipo1+"/"+tipo2));

    crearBotonSonido(sonido);
}

boton.addEventListener("click", function(){
    obtenerDatos();
});

const tr = {
    "electric" : "electrico",
    "fire" : "fuego",
    "flying" : "volador",
    "water" : "agua",
    "bug" : "bicho",
    "grass" : "planta",
    "ice" : "hielo",
    "ground" : "tierra",
    "rock" : "roca",
    "steel" : "acero",
    "poison" : "veneno",
    "dark" : "siniestro",
    "fighting" : "lucha",
    "fairy" : "hada",
    "psychic" : "psiquico",
    "dragon" : "dragón",
    "ghost" : "fantasma",
    "normal" : "normal"
};

function crearBotonSonido(sonido){
    let boton = document.createElement("button");
    boton.textContent = "🔊";
    boton.addEventListener("click", ()=>{
        sonido.play();
    });
    document.body.appendChild(boton);
}