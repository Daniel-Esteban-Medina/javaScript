const b = document.getElementById("botContador");
const c = document.getElementById("contador");
b.addEventListener("click", function(){
    c.textContent = parseInt(c.textContent) + 1;
});