//5.Crea dos arrays de números arr1 y arr2 con 5 elementos cada uno. Recorre ambos arrays y cuenta cuántos elementos son iguales y están en la misma posición. Imprime el resultado.
let arr1 = [1,7,11,4,90];
let arr2 = [3,83,11,3,6];
let iguales = 0;
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] == arr2[i]){
        iguales = iguales + 1;
    }
}
console.log("La cantidad de elementos que son iguales y están en la misma posición son: "+iguales);