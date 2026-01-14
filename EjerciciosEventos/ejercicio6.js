const b = document.getElementById("boton");
b.addEventListener("click", function(){
    if(b.className != "botonAzul"){
        b.className = "botonAzul";
    } else {
        b.className = "";
    }
});
