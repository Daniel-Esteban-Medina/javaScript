class Punto{
    constructor(valX, valY){
        this.valX = valX;
        this.valY = valY;
    }
    static distancia(punto1, punto2){
        let px = (punto1.valX > punto2.valX ? (punto1.valX - punto2.valX) : (punto2.valX - punto1.valX));
        let py = (punto1.valY > punto2.valY ? (punto1.valY - punto2.valY) : (punto2.valY - punto1.valY));
        let distancia = Math.sqrt((px * px) + (py * py));
    }
}
alert(distancia(new Punto(15,27), new Punto(43,7)));