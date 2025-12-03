console.log("href: "+location.href);
console.log("protocol: "+location.protocol);
console.log("host: "+location.host);
console.log("pathname: "+location.pathname);
setTimeout(()=>{
    let res = confirm("Redirigirse a otra pagina?");
    let rutaComp = location.pathname;
    let partesRuta = rutaComp.split('/'); let nombreArchivo = rutaComp[rutaComp.length - 1];
    console.log(nombreArchivo);
    if(res){
        location.href = "location2.html";
    }
    },5000);
