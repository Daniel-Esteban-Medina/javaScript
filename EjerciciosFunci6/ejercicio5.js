// 5.Función que cuente el número de vocales de una palabra.
function contVocales(palabra){
    let cont = 0;
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] == "a" || palabra[i] == "e" || palabra[i] == "i" || palabra[i] == "o" || palabra[i] == "u"){
            cont++;
        }
    }
    return cont;
}
alert(contVocales("Hola mundo"));