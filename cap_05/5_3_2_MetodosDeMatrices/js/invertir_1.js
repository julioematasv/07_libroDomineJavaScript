
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 "," Elemento 4 ", " Elemento 5 ");
var indice, cadena;

document.write("La matriz tiene: " + matriz.length + " elementos <br>");
    for(indice = 0; indice < matriz.length; indice ++){
    document.write(matriz[indice] + "<br>");
}


matriz.reverse();// invirtiendo orden de elementos
document.write("<br>");


document.write("Ahora cambiamos el orden en la matriz, " + matriz.length + " elementos <br>");


document.write("Estos son los siguientes: <br>");
for(indice = 0; indice < matriz.length; indice ++) {
    document.write(matriz[indice] + "<br>");
}

