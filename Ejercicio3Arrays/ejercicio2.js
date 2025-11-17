//2.Sistema de inicio de sesión y registro con arrays (menú incluído).

let menu = "";
let usuarios = [];
let passwords = [];

while(menu != "salir"){

    menu = prompt("SELECCIONE:  iniciar sesión / registrarse / salir");

    if(menu == "registrarse"){
        let nombre = prompt("Registro: introduzca un nombre.");
        let password = prompt("Registro: introduzca una contraseña");
        usuarios.push(nombre);
        passwords.push(password);
        alert("Se a registrado -> "+nombre);
    }
    
    if(menu == "iniciar sesión"){
        let nombre = prompt("Inicio sesión: introduzca el nombre");
        let password = prompt("Inicio sesión: introduzca la contraseña");
        let usuarioExistente = false;
        for(let i = 0; i <= usuarios.length; i++){
            if(usuarios[i] == nombre && passwords[i] == password){
                usuarioExistente = true;
            }
        }

        if(usuarioExistente){
            alert("Inicio de sesión completado");
        }else{
            alert("Usuario o contraseña incorrectos");
        }
    }   
}