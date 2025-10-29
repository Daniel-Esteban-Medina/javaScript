// Convensor de segundos a días + horas + minutos + seg
let entrada = Number(prompt("Introduce los segundos"));
let dias = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;
dias = entrada

// 24h = 1 dia ----  24h =  86400seg

dias = parseInt(entrada / 86400);
entrada = entrada % 86400;
horas = parseInt(entrada / 3600);
entrada = entrada % 3600;
minutos = parseInt(entrada / 60);
segundos = entrada % 60;
alert("DIAS: "+dias+" HORAS: "+horas+" MINUTOS: "+minutos+" SEGUNDOS: "+segundos);