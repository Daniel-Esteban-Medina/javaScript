const boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    alert("Has echo clik");
});
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", (objEvento)=>{
    console.log(objEvento);
});