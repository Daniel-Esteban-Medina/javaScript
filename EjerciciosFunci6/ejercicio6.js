// 6.Función que reciba tres parámetros (a,b,c) y devuelva un array con las soluciones de una ecuación de segundo grado. (-b+-sqrt(b**2-4*a*c)/2*a)
function ecuSegundoGrado(a, b, c){
    let arr = [];
    let raiz = (b ** 2) - 4 * a * c;
    if(raiz < 0){
        arr[0] = "No hay soluciones reales.";
        arr[1] = "No hay soluciones reales.";
    } else {
        raiz = Math.sqrt(raiz);
        // Math.sqrt(x) devuelve la raiz cuadrada
        let dividendo = 2 * a;
        arr[0] = (-b + raiz) / dividendo;
        arr[1] = (-b - raiz) / dividendo;
    }
    return arr;
}
let array = ecuSegundoGrado(1, 5, 6);
alert("1º solución: "+array[0]+"\n2º solución: "+array[1]);