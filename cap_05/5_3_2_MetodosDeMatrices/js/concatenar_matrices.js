
var indice = 0;
var matriz_1 = new Array("uno", "dos", "tres");
var matriz_2 = new Array("cuatro", "cinco", "seis");

var matriz_3 = matriz_1.concat(matriz_2);

for (indice = 0; indice <matriz_3.length; indice++){
    document.write(matriz_3[indice] + "<br>");
}
