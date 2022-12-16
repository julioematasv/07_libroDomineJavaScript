// inicializando la variable
let valor = 10;
function doblar(valor) {
    valor *= 2;
    document.write("El doble del valor es " + valor + "<br>");
}

document.write("El valor es " + valor + "<br>");
doblar(valor);  //llamamos a la funcion pasándole la variable.

document.write("El valor sigue siendo " + valor);
//La variable original no se ha modificado.