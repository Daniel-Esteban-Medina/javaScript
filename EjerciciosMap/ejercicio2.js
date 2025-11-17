//2.Dado Set A y Set B devuelve un set que contenga los elementos comunes en los dos anteriores. Usando filter
let setA = new Set([1,2,3,4]);
let setB = new Set([3,4,5,6]);
let arrayTempA = Array.from(setA);
let arrayTempB = Array.from(setB);
let setFin = new Set(arrayTempA.filter(a => arrayTempB.includes(a)));
console.log(setFin);