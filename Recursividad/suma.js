function sum(arr){
    // caso base
    if(arr.length == 0) return 0;
    // llamada recursiva
    return arr[0] + sum(arr.splice(1));
}