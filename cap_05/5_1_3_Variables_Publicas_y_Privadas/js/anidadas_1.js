function externa(){
    document.write("Esto está en la función EXTERNA.<br>");

    function interna() {
        document.write("Esto está en la función INTERNA.<br>");
    }

    interna(); //llamando a la función interna.

}

externa();//llamando a la función externa.