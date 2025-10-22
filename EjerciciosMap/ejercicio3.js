//Copia el ejercicio del menú de inicio de sesión  y combierte los arrays en un mapa
let menu = 0;
let usuarios = new Map();
while(menu != 3){

    menu = prompt("SELECCIONE:  \n1-iniciar sesión \n2-registrarse \n3-salir");

    if(menu == 1){
        let nombre = prompt("Inicio sesión: introduzca el nombre");
        let password = prompt("Inicio sesión: introduzca la contraseña");
        let usuarioExistente = false;
        if(usuarios.has(nombre) && usuarios.get(nombre) == password){
            usuarioExistente = true;
        }
        if(usuarioExistente){
            alert("Inicio de sesión completado");
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    }   

    if(menu == 2){
        let nombre = prompt("Registro: introduzca un nombre.");
        let password = prompt("Registro: introduzca una contraseña");
        usuarios.set(nombre, password);
        alert("Se a registrado -> "+nombre);
    }
}