
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 ");
var cadena;

cadena = matriz.join("|");
document.write(cadena);
document.write("<br>");


document.write("<br>");
document.write("<hr>")


document.write("<p>Ahora usamos el caracter: <b>asterisco ( * )</b></p>");
cadena = matriz.join("*");
document.write(cadena);


document.write("<br>");
document.write("<hr>")


document.write("<p>Ahora usamos el caracter: <b>guión ( - )</b></p>");
cadena = matriz.join("-");
document.write(cadena);
