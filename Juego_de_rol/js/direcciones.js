const botInicio = document.getElementById("botInicio");
if(botInicio != null){
    botInicio.addEventListener("click", function(){
        window.location.href = "./inicio.html";
        setMons("");
    });
}

//TIENDA
const botTienda = document.getElementById("botTienda");
if(botTienda != null){
    botTienda.addEventListener("click", function(){
        window.location.href = "./tienda.html";
    });
}
const botComprarSalud = document.getElementById("botComprarSalud");
if(botComprarSalud != null){
    botComprarSalud.addEventListener("click", function(){
        let aven = getAven();
        if(aven.dinero >= 10){
            aven.salud += 10;
            aven.dinero -= 10;
            setAven(aven);
            rellenarDatosHTMLAven();
        } else {
            alert("No tines dinero suficiente");
        }
    });
}
const botComprarArmas = document.getElementById("botComprarArmas");
if(botComprarArmas != null){
    botComprarArmas.addEventListener("click", function(){
        let aven = getAven();
        if(aven.dinero >= 30){
            aven.atk += 30;
            aven.dinero -= 30;
            setAven(aven);
            rellenarDatosHTMLAven();
        } else {
            alert("No tines dinero suficiente");
        }
    });
}

// ENTRENAR
const botEntrenar = document.getElementById("botEntrenar");
if(botEntrenar != null){
    botEntrenar.addEventListener("click", function(){
        window.location.href = "./entrenar.html";
    });
}
const botSlime = document.getElementById("botSlime");
if(botSlime != null){
    botSlime.addEventListener("click", function(){
        window.location.href = "./monstruos.html";
        setMons(slime);
    });
}
const botGolem = document.getElementById("botGolem");
if(botGolem != null){
    botGolem.addEventListener("click", function(){
        window.location.href = "./monstruos.html";
        setMons(golem);
    });
}

// MONSTRUOS
let dragon = ["dragon",100, 70];
let slime = ["slime",15, 10];
let golem = ["golem",60, 40];
const botDragon = document.getElementById("botDragon");
if(botDragon != null){
    botDragon.addEventListener("click", function(){
        window.location.href = "./monstruos.html";
        setMons(dragon);
    });
}
const botAtkMonstruo = document.getElementById("botAtkMonstruos");
if(botAtkMonstruo != null){
    botAtkMonstruo.addEventListener("click", function(){
        let aven = getAven();
        let mons = getMons();
        aven.salud -= mons[2];
        setAven(aven);
        mons[1] -= aven.atk;
    });
}


function getMons(){
    let mons = JSON.parse(localStorage.getItem("monstruo")) || "";
    return mons;
}
function setMons(mostruo){
    localStorage.setItem("monstruo", JSON.stringify(mostruo));
}
// AVENTURERO
let aventurero = {
    xp: 0,
    salud: 100,
    dinero: 50,
    atk: 5
};
setAven(getAven());
function getAven(){
    let aven = JSON.parse(localStorage.getItem("objAventur")) || aventurero;
    return aven;
}
function setAven(aveGua){
    localStorage.setItem("objAventur", JSON.stringify(aveGua));
}
function rellenarDatosHTMLAven(){
    // ave
    const xp = document.getElementById("xp");
    const salud = document.getElementById("salud");
    const dinero = document.getElementById("dinero");
    let aven = getAven();
    xp.textContent = "XP: "+aven.xp;
    salud.textContent = "Salud: "+aven.salud;
    dinero.textContent = "Dinero: "+aven.dinero;
    // mon
    let etiquetaMons = "";
    let cuadroTexto = document.getElementById("etiquetaMons");
    let mons = getMons();
    switch(mons[0]){
        case "":

        break;
        case "slime":
            etiquetaMons = `
                Monster Name: slime Health: ${slime[1]}
            `;
            cuadroTexto.textContent = etiquetaMons;
        break;
        case "golem":
            etiquetaMons = `
                Monster Name: golem Health: ${golem[1]}
            `;
            cuadroTexto.textContent = etiquetaMons;
        break;
        case "dragon":
            etiquetaMons = `
                Monster Name: dragón Health: ${dragon[1]}
            `;
            cuadroTexto.textContent = etiquetaMons;
        break;
    }
}
rellenarDatosHTMLAven();
