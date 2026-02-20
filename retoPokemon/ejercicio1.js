async function obtenerDatos(){
    let respuesta = await fetch("https://pokeapi.co/api/v2");
    let resultado = await respuesta.json();
    const enlace = resultado["pokemon-species"];
    console.log(enlace);
}
let tabla = document.getElementById("tabla");
obtenerDatos();