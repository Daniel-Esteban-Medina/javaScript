// 8.Función que sume todos los elementos introducidos como parámetros, sin preestablecer el número de parámetros.
function suma(...nums){
    return nums.reduce((acc, valor) => acc + valor);
}
alert(suma(2,2,5,60));