let aventurero = {
    xp: 0,
    salud: 100,
    dinero: 50,
    atk: 6
};
localStorage.setItem("objAventur", aventurero);

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