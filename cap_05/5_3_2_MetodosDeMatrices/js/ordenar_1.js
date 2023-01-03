
var nombres = new Array("José", "Laura", "Antonio", "Susana", "Andrea");

var indice;

document.write("La lista de nombres es: <br>");
for(indice = 0; indice < nombres.length; indice++){
    document.write(nombres[indice] + "<br>");
}

nombres.sort();
document.write("<br>");

document.write("La lista ORDENADA de nombres es: <br>");
for(indice = 0; indice < nombres.length; indice++){
    document.write(nombres[indice] + "<br>");
}