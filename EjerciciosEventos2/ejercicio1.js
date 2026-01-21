//Realiza un ejercicio como el del ejemplo, con un div que contenga un div que contenga otro div. 
// Prueba el bubbling creando eventos para cada uno. (Prueba  también con alguno de los eventos que no generan propagación).
let abuelo = document.getElementById("abuelo");
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

//Eventos que se propagan: click, etc...
abuelo.addEventListener("click", function(){
    console.log("Has dado click en el div abuelo");
});
padre.addEventListener("click", function(){
    console.log("Has dado click en el div padre");
});
hijo.addEventListener("click", function(){
    console.log("Has dado click en el div hijo");
});

//Eventos que no se propagan: mouseenter, mouseleave, etc...
hijo.addEventListener("mouseenter", function(){
    hijo.style.border = "solid black 2px";
});
hijo.addEventListener("mouseleave", function(){
    hijo.style.border = "";
});