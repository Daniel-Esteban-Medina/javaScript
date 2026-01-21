//Pon en práctica la cancelación, crea un enlace que dirija a una web y suprime la redirección. 
// Puedes probar a cambiar algo de este elemento para mostrar que ya no redirige una vez hecho el primer clic.
let enlace = document.getElementById("enlace");
enlace.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("No fue rederigido.");
});