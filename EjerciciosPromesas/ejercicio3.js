//Crea una función dividirEntreDos que reciba un número y espere un segundo. 
//Si el número es 0 rechaza con “No se puede dividir”, si no resuelve con el número dividido entre dos.

function dividirEntreDos(num){
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            if(num != 0){
                resolve(num/2);
            } else {
                reject("No se puede dividir");
            }
        }, 1000);
    });
    return promesa;
}

dividirEntreDos(8)
.then((resuelto)=>{
    console.log("Exito: ", resuelto);
})
.catch((error)=>{
    console.log("Error: ", error);
});