function mostrarMayuscula() {
    var datos = document.getElementById('datos').value;
    datos = convertir(datos.toLowerCase());
console.log(datos);
document.getElementById('resultado').innerHTML = datos;
}

function convertir(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mostrarTexto() {
    var mayuscula = document.getElementById('datos').value;
    var textMay = mayuscula.toLocaleUpperCase();

    console.log(textMay);
    document.getElementById('resultadoTexto').innerHTML = textMay;
}