export class Vehiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    descripcion(){
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.ano}`;
    }
    edad(){
        return (new Date()).getFullYear() - this.ano;
    }
}