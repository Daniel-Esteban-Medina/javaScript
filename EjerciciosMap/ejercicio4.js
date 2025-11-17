let set1 = new Set();
let set2 = new Set();
let set3 = new Set();
for(let i = 0; i < 3; i++){
    let texto = "Introduce el "+(i+1)+"º elemento del primer set";
    set1.add(prompt(texto));
}
for(let i = 0; i < 3; i++){
    let texto = "Introduce el "+(i+1)+"º elemento del segundo set";
    set2.add(prompt(texto));
}
for(let i = 0; i < 3; i++){
    let texto = "Introduce el "+(i+1)+"º elemento del tercer set";
    set3.add(prompt(texto));
}
let arrayTemp1 = Array.from(set1);
let arrayTemp2 = Array.from(set2);
let arrayTemp3 = Array.from(set3);
let noRepiten1 = arrayTemp1.filter(a => !arrayTemp2.includes(a) && !arrayTemp3.includes(a));
let noRepiten2 = arrayTemp2.filter(a => !arrayTemp1.includes(a) && !arrayTemp3.includes(a));
let noRepiten3 = arrayTemp3.filter(a => !arrayTemp2.includes(a) && !arrayTemp1.includes(a));
let noRepitenFin = noRepiten1.filter(a => !noRepiten2.includes(a) && !noRepiten3.includes(a));
noRepitenFin.push(noRepiten2.filter(a => !noRepiten1.includes(a) && !noRepiten3.includes(a)));
noRepitenFin.push(noRepiten3.filter(a => !noRepiten1.includes(a) && !noRepiten2.includes(a)));

let texto = "Los valores que no se repiten son: \n";
for(let i = 0; i < noRepitenFin.length; i++){
    texto = texto + noRepitenFin[i]+"\n";
}
alert(texto);