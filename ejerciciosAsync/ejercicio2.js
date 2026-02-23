//Crea una función llamada doblar que reciba un número como parámetro, devuelva una promesa y espere un segundo, 
//resolviendo con el número mutiplicado por dos si el número es positivo y rechazando con “Utiliza solo números positivos” si no. 
//Crea una función run() marcada como async que llame a doblar(5) usando await, y vuelve a doblar el resultado volviendo a llamar 
//a la función doblar para luego imprimir en consola “Resultado: X”

function doblar(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n >= 0) { 
                resolve(n * 2);
            } else { 
                reject("Utiliza solo números positivos");
            }
        }, 1000);
    });
}

async function run() {
    try {
        let num1 = await doblar(5);
        let num2 = await doblar(num1);
        console.log("Resultado: "+num2);
    } catch (error) {
        console.log(error);
    }
}

run();