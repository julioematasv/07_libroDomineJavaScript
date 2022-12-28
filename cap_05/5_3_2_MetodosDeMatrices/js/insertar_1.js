
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 ");
var indice, cadena;

document.write("La matriz tiene: " + matriz.length + " elementos <br>");
document.write("La matriz tiene: los siguientes elementos: <br>");
    for(indice = 0; indice < matriz.length; indice ++){
    document.write(matriz[indice] + "<br>");
}


cadena = matriz.unshift("Elemento A", "Elemento B");// agregamos 2 elementos
// al inicio.
document.write("<br>");


document.write("<b>Ahora la matriz a quedado así:</b> <br>");
document.write("<b>La matriz tiene: </b>" + matriz.length + "<b> elementos</b> <br>");

    for(indice = 0; indice < matriz.length; indice ++) {
    document.write(matriz[indice] + "<br>");
}

