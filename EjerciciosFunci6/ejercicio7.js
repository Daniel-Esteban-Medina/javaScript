// 7.Crea una función que reciba un número y un callback. Si el número es mayor a 10, ejecuta el callback.
function numCallback(num, callback){
    if(num > 10){
        num = callback(num);
    }
    return num;
}
//función anónima. No tiene nombre, se pasa directamente como argumento. function(argumento) { ... }  2º Forma: (argumento) => { ... } es la arrow function.
alert(numCallback(15, function(num){return num**2}));