//console.log(navigator.permissions.query({name: "geolocation"}));
function mostrarConex(){
    console.log(navigator.onLine ? "Conectado" : "Sin conexión");
}
let repMostrarConex = setInterval(mostrarConex,5000);