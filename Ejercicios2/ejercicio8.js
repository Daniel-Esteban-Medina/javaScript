let respuesta = "";
let dia = (new Date().getDay()-2).toString();
let mes = (new Date().getMonth()+1).toString();
while(respuesta != "salir"){
    respuesta = prompt("¿Qué quiere saber?   SELECCIONE: dia / mes / salir");
    switch(respuesta){
        case "dia":
            alert(dia);
        break;
        case "mes":
            alert(mes);
        break;
        case "salir":
            alert("adiós");
        break;
    }
}