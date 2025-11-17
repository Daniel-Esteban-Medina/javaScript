class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
    cumplirAnos(){
        this.edad += 1;
    }

}

let p = new Persona("Jose",17,"Madrid");
p.edad = 14; p["nombre"] = "Josete";
p.profesion = "Programador";
p.saludar(); p.cumplirAnos();
// Para ver el estado en ese momento, usa JSON.stringify(p) o una copia del objeto. JSON.stringify genera una copia por valor, no una referencia.
console.log(JSON.stringify(p));
delete p.ciudad;
console.log(JSON.stringify(p));