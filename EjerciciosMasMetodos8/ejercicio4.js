function valorAleatorio(max, min){
   return Math.floor(Math.random() * (max - min) + min);
}
alert(valorAleatorio(10,1));