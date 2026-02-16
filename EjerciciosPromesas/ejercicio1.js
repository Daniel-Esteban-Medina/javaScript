//Crea una función llamada esperarSegundos que reciba un número de segundos, devuelva una 
//Promise que se resuelva con el texto "Han pasado X segundos", debiendo haber esperado 
//realmente esos segundos usando setTimeout.

function esperarSegundos(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Han pasado ${segundos} segundos`);
        }, segundos * 1000);
    });
}
esperarSegundos(3).then(mensaje => console.log(mensaje));