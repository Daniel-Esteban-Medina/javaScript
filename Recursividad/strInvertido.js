function invertir(texto){
    // caso base
    if(texto.length === 0) return 0;
    // llamada recursiva
    let string;                         // NO FUNCIONA
    texto.splice(texto.length,1)
    return string + invertir(texto);
}

alert(invertir("Hola"));