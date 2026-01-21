//Reutiliza el contador de la otra hoja de ejercicios y haz que se lance un evento cuando llegue a 10.
cont = 0;
const evento10 = new Event("llegarA10");
document.addEventListener("llegarA10", function(){
    console.log("Se ha llegado a 10");
});
setInterval(function(){
    cont += 1;
    document.getElementById('contador').innerHTML = cont;
    if(cont == 10){
        document.dispatchEvent(evento10);
    }
}, 1500);
