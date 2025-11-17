//5.Crea un menú que controle los datos de un array (como una lista de la compra), que permita añadir al final o al principio, eliminar alguno 
// si existe o borrar todos, y a cada paso actualice (o vuelva a mostrar) la lista completa.
let listaCompra = [];
let menu = 0;
let texto = "";
while(menu != -1){
    menu = Number(prompt("SELECCIONE: \n1-añadir final \n2-añadir principio \n3-eliminar alguno \n4-eliminar todo"));
    switch(menu){
        case 1:
            texto = prompt("Introduce el elemento a añadir al final");
            listaCompra.push(texto);
        break;
        case 2:
            texto = prompt("Introduce el elemento a añadir al principio");
            listaCompra.unshift(texto);
        break;
        case 3:
            texto = Number(prompt("SELECCIONE el número del elemento a borrar"));
            listaCompra.splice((texto-1), 1);
        break;
        case 4:
            listaCompra.splice(0, listaCompra.length);
        break;
    }
    if(listaCompra.length > 0){
        texto = "";
        for(let i = 0; i < listaCompra.length; i++){
            texto = texto + "\n"+(i+1)+"-"+listaCompra[i];
        }
        alert(texto);
    }
}