// 4.Función esPrimo() que devuelva booleano.
function esPrimo(num){
    let esPrimo = true;
    for(let i = 2; i < num; i++){
        if((num % i) == 0){
            esPrimo = false;
        }
    }
    return esPrimo;
}
alert(esPrimo(7));