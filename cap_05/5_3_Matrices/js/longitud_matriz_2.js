
var nombres = new Array();
var nombre = "", indice = 0;

while (nombre != "fin"){
    nombre = prompt("Introduzca un nombre", "");
    if (nombre != "fin"){
        nombres[indice] = nombre;
        indice++;
    }
}

document.write("La matriz tiene los siguientes nombres. <br><br>");
for (indice = 0; indice < nombres.length; indice++){
    document.write(nombres[indice] + "<br><br>");
}

document.write("En total hay " + nombres.length + " nombres.");