
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 ");
var indice, cadena;

document.write("La matriz tiene los siguientes elementos: <br>");
for(indice = 0; indice < matriz.length; indice ++){
    document.write(matriz[indice] + "<br>");
}


cadena = matriz.push(" Elemento 4 ", " Elemento 5 "); //agregando despues
// de último elemento.
document.write("<br> Usamos el método push() y ahora la matriz tiene: " + matriz.length + " Elementos <br>");


document.write("Estos son los siguientes: <br>");
for(indice = 0; indice < matriz.length; indice ++) {
    document.write(matriz[indice] + "<br>");
}

