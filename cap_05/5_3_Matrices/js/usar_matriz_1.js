
var nombres = new Array();
var indiceNombres;
for (indiceNombres = 0; indiceNombres <= 5; indiceNombres++){
    nombres[indiceNombres] = prompt("Introduzca el nombre de la persona " + (indiceNombres+1), "");
}

alert("A continuación Ingresara los apellidos de esas personas");

var apellidos = new Array();
var indiceApellidos;
for (indiceApellidos = 0; indiceApellidos <= 5; indiceApellidos++){
    apellidos[indiceApellidos] = prompt("Introduzca el apellido de la persona " + (indiceApellidos+1), "");
}

for (indiceNombres = 0; indiceNombres <= 5; indiceNombres ++){
    document.write("La persona número " + (indiceNombres+1) + " se llama " + nombres[indiceNombres]+ "<br>");
}

document.write("<br>");
document.write(nombres[0] + " " + apellidos[0] +  "<br>");
document.write(nombres[1] + " " + apellidos[1] +  "<br>");
document.write(nombres[2] + " " + apellidos[2] +  "<br>");
document.write(nombres[3] + " " + apellidos[3] +  "<br>");
document.write(nombres[4] + " " + apellidos[4] +  "<br>");
document.write(nombres[5] + " " + apellidos[5] +  "<br>");

alert("La matriz Nombres tiene " + nombres.length + " elementos.")