function sumar(){
    let suma = 0, cuenta;
    for (cuenta=0; cuenta<this.length; cuenta++){
        suma += this[cuenta];
    }
    return suma;
}

Array.prototype.totalizar = sumar;
let edades = new Array (27,10,30,45);
let total = edades.totalizar();
document.write("El total de los elementos de la Matriz 'edades' vale: " + total);