//Utilizando la API de los ejemplos previos (https://stephen-king-api.onrender.com/api/books) 
//hay que crear una función llamada obtenerLibros que utilice fetch y await para obtener los 
//datos de la API y convertir la respuesta a JSON, para poder mostrar los títulos de los libros.
//Bonus extra: Utilizando lo que sabemos de manejo del DOM, crear una tabla con título y año de cada libro 🤪 TIP: Podemos utilizar alguna extensión 
//(P.ej. JSON Viewer Pro en Chrome) para ver la estructura del JSON. 

let tablaLibros = document.getElementById("tablaLibros");

async function obtenerLibros(){
    let respuesta = await fetch("https://stephen-king-api.onrender.com/api/books");
    let resultado = await respuesta.json();
    console.log(resultado);

    rellenarTabla(resultado.data);

}
obtenerLibros();


function rellenarTabla(libros){
    tablaLibros.innerHTML = "<tr>"+
                                    "<th>TITULO</th><th>PUBLISHER</th><th>AÑO</th>"+
                                "</tr>";
        for(let i = 0; i < libros.length; i++){
            tablaLibros.innerHTML += "<tr>"+
                                        "<td>"+libros[i].Title+
                                        "</td><td>"+libros[i].Publisher+
                                        "</td><td>"+libros[i].Year+"</td>"+
                                    "</tr>";
        }
}