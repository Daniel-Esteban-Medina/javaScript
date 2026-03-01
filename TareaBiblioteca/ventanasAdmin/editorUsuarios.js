import { b1, almacen} from "../componentes/datosPrueba.js";
import { Usuario } from "../clases/Usuario.js";

almacen.deObjPlanoAinstancia(b1);
almacen.cargarStaticsValues();

let maxLibros = document.getElementById("maxLibros");
let tiempoMaximo = document.getElementById("tiempoMaximo");
let saveVaribles = document.getElementById("saveVaribles");
let addUser = document.getElementById("addUser");
let deletUser = document.getElementById("deletUser");
maxLibros.value = Usuario.maxLibros;
tiempoMaximo.value = Usuario.tiempoMaximo;

saveVaribles.addEventListener("click", function(){
    Usuario.maxLibros = parseInt(maxLibros.value);
    Usuario.tiempoMaximo = parseInt(tiempoMaximo.value);
    almacen.setUsrStaticsValues(parseInt(tiempoMaximo.value), parseInt(maxLibros.value));
    alert("Variables guardadas");
});

addUser.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    let rol = document.getElementById("rol").value;
    if(nombre != "" && pass != ""){
        let nuevoU = new Usuario(nombre, pass, rol);
        b1.registrarUsuario(nuevoU);
        almacen.setUsuarios(b1.usuarios);
        b1.printAllUsuarios();
    }
});

deletUser.addEventListener("click", function(){
    let nomDel = document.getElementById("nombreDel").value;
    b1.usuarios = b1.usuarios.filter(u => u.nombre != nomDel);
    almacen.setUsuarios(b1.usuarios);
    b1.printAllUsuarios();
});

b1.printAllUsuarios();