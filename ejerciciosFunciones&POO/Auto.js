import { Vehiculo } from "./Vehiculo.js";
class Auto extends Vehiculo{
    constructor(marca, modelo, ano, puertas){
        super(marca, modelo, ano);
        this.puertas = puertas;
    }
    descripcion(){
        return super.descripcion()+" Número de puertas: "+this.puertas;
    }
}
let a1 = new Auto("Opel", "Hibrido",2004,14);
console.log(a1.descripcion());