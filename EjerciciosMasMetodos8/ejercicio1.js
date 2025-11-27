let frase = "El tigre come trigo en un trigal";
let arr = frase.split(" ");
let mayor = "";
for(let i = 0; i < arr.length; i++){
    if(mayor.length < arr[i].length){
        mayor = arr[i];
    }
}
alert("La letra más grande es: "+mayor);