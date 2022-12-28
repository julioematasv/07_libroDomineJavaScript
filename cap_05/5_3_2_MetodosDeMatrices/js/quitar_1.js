
var matriz = new Array("Elemento 1 ", " Elemento 2 ", " Elemento 3 ", " Elemento 4");
var indice, cadena;

//cadena = matriz.join("|");
document.write("La matriz tiene los siguientes elementos: <br>");
for(indice = 0; indice < matriz.length; indice ++){
    document.write(matriz[indice] + "<br>");
}

document.write("<br> Usamos el método pop() y queda así: <br>");
cadena = matriz.pop(); //quitar el último elemento.

for(indice = 0; indice < matriz.length; indice ++) {
    document.write(matriz[indice] + "<br>");
}

document.write("<br> El elemento eliminado es el: " + cadena);