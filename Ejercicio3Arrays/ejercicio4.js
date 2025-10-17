//4.Crea un array de 10 valores introducidos por teclado y devuelvelo ordenado (SIN FUNCIONES).
let arrayDesor = [];
let numMayor = 0;
let arrayMayores = [];
let cont = 0;

for(let i = 0; i < 10; i++){
    arrayDesor[i] = Number(prompt("introduce 10 números. "+(i+1)));
}

for(let i = 0; i < 10; i++){
    
    for(let j = 0; j < 10; j++){
        
        if(numMayor < arrayDesor[j] && arrayDesor[j] != null){
            numMayor = arrayDesor[j];
            cont = j;
        }
    }
    
    arrayDesor[cont] = null;
    arrayMayores[i] = numMayor;
    numMayor = 0;
    cont = 0;
    
}

for(let i = 0; i < 10; i++){
    console.log(arrayMayores[i]);
}