function doblar(dato) {
    dato *= 2;
    return dato;
}

let valor = 10, doble;
doble = doblar(valor);

document.write("El valor es: " + valor + "<br>");
document.write("El doble del valor es: " + doble + "<br>");