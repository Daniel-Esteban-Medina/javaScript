// 3- Crea un contador en tu página que vaya cambiando el número cada 3 segundos.
cont = 0;
setInterval(function(){
cont += 1;
document.getElementById('contador').innerHTML = cont;
}, 3000);