var contador = 0;

$("#boton").click(function() {
    contador = (contador + 1) % 10;
    $("#texto").text(contador);
});