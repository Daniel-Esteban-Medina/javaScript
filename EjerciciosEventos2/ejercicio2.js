//Duplica el ejercicio anterior y evita el bubbling.
let abuelo = document.getElementById("abuelo");
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

//Eventos que se propagan: click, etc...
abuelo.addEventListener("click", function(){
    console.log("Has dado click en el div abuelo");
});
padre.addEventListener("click", function(event){
    console.log("Has dado click en el div padre");
    event.stopPropagation();
});
hijo.addEventListener("click", function(event){
    console.log("Has dado click en el div hijo");
    event.stopPropagation();
});

//Eventos que no se propagan: mouseenter, mouseleave, etc...
hijo.addEventListener("mouseenter", function(){
    hijo.style.border = "solid black 2px";
});
hijo.addEventListener("mouseleave", function(){
    hijo.style.border = "";
});