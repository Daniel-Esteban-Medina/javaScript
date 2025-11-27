let cumple = new Date("2004-01-29");
alert(cumple.toLocaleDateString("es-ES"));
let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
alert("Nacio el "+diaSemana[cumple.getDay()]+" y ahora tiene "+((new Date()).getFullYear() - cumple.getFullYear()));
