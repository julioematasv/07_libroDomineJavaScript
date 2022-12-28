
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 "," Elemento 4 ", " Elemento 5 ");
var indice, cadena;

document.write("La matriz tiene: " + matriz.length + " elementos <br>");
document.write("La matriz tiene: los siguientes elementos: <br>");
    for(indice = 0; indice < matriz.length; indice ++){
    document.write(matriz[indice] + "<br>");
}


cadena = matriz.shift();// quitamos el primer elemento.
document.write("<br>");


document.write("<b>Ahora la matriz a quedado así:</b> <br>");
document.write("<b>La matriz tiene: </b>" + matriz.length + "<b> elementos</b> <br>");

    for(indice = 0; indice < matriz.length; indice ++) {
    document.write(matriz[indice] + "<br>");
}

    document.write("<br> El elemento eliminado es: " + "<b>" + cadena + "</b>");

