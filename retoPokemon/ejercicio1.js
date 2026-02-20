let boton = document.getElementById("boton");
async function obtenerDatos(){
    let nombre = document.getElementById("nombre").value;
    let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+nombre);
    pokemon = await respuesta.json();
    console.log(pokemon);
    let name = pokemon.name;
    let tipo1 = pokemon.types["0"].type.name;
    let tipo2 = (pokemon.types["1"] == undefined) ? "" : pokemon.types["1"].type.name;

    let imagen = pokemon.sprites.front_default;
    let img = document.createElement("div");
    img.innerHTML = "<img src='"+imagen+"'></img>";
    document.body.appendChild(img);

    console.log("nombre: "+name+((tipo2 == "") ? " tipo: "+tipo1 : " tipos: "+tipo1+"/"+tipo2));
}

boton.addEventListener("click", function(){
    obtenerDatos();
});
