// 9.Función que reciba un array de palabras y devuelva solo las que son palíndromos.
function palindromos(arr){
let palind = [];
for(let i = 0; i < arr.length; i++){
    let reversa = arr[i].split("").reverse().join("");
    if(reversa == arr[i]){
        palind.push(arr[i]);
    }
}
return palind;
}
alert(palindromos(["ana", "casa", "oso", "ama", "coche", "somos", "pueblo"]));