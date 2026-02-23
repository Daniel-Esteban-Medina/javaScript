//Crear una función llamada hacerTarea que devuelva una promesa, espere un segundo y se resuelva con el mensaje “Tarea completada”. 
//Crea una función run() marcada como async que llame a hacerTarea usando await e imprima por consola el mensaje que devuelve.

function hacerTarea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea completada");
        }, 1000);
    });
}

async function run() {
    let resultado = await hacerTarea();
    console.log(resultado);
}

run();