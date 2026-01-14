const botones = document.querySelectorAll("button");

botones.forEach(boton =>{
    boton.addEventListener("click", function(){
        console.log(this.textContent);
    });
});

const botonDobleclick = botones[1];

botonDobleclick.addEventListener("dblclick", function(){
    console.log("Se ha echo doble click en: "+this.textContent);
});