let aventurero = {
    xp: 0,
    salud: 100,
    dinero: 50,
    atk: 5
};
let dragon = 100;

setAven(aventurero);

const botTienda = document.getElementById("botTienda");
if(botTienda != null){
    botTienda.addEventListener("click", function(){
        window.location.href = "./tienda.html";
    });
}

const botInicio = document.getElementById("botInicio");
if(botInicio != null){
    botInicio.addEventListener("click", function(){
        window.location.href = "./inicio.html";
    });
}

const botEntrenar = document.getElementById("botEntrenar");
if(botEntrenar != null){
    botEntrenar.addEventListener("click", function(){
        window.location.href = "./entrenar.html";
    });
}

const botDragon = document.getElementById("botDragon");
if(botDragon != null){
botDragon.addEventListener("click", function(){
    window.location.href = "./dragon.html";
});
}
const botAtkDragon = document.getElementById("botAtkDragon");
if(botAtkDragon != null){
    botAtkDragon.addEventListener("click", function(){
        let aven = getAven();
        aven.salud -= 50;
        setAven(aven);
        dragon -= aven.atk;
    });
}

function getAven(){
    let aven = JSON.parse(localStorage.getItem("objAventur"));
    return aven;
}

function setAven(aventurero){
    localStorage.setItem("objAventur", JSON.stringify(aventurero));
}

function rellenarDatosAven(){
    const xp = document.getElementById("xp");
    const salud = document.getElementById("salud");
    const dinero = document.getElementById("dinero");
    let aven = getAven();
    xp.textContent = "XP: "+aven.xp;
    salud.textContent = "Salud: "+aven.salud;
    dinero.textContent = "Dinero: "+aven.dinero;
}