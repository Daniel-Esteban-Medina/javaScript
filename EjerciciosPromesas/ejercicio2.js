//Crea una función doblarNumero que reciba un número y devuelva una promesa, 
//de forma que espere un segundo y resuelva con el número multiplicado por dos.

function doblarNumero(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 1000);
    });
}

doblarNumero(5).then(console.log);