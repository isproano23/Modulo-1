ejecutarPrueba1=function(){
    let mensaje
    mensaje=recuperarTexto("txtCadena")
    recorrerCadena(mensaje)
    recorrerCadenaInvertida(mensaje)
}


recorrerCadena = function (cadena) {
  let caracter;

  for (let posicion = 0; posicion < cadena.length; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("Caracter" + caracter + "posicion" + posicion);
  }
  for (let posicion = 0; posicion <=cadena.length- 1; posicion++ ) {
    caracter = cadena.charAt(posicion);
    console.log("CARACTER" + caracter + "posicion" + posicion);
  }
};
recorrerCadenaInvertida = function () {

 // 1. Obtiene el valor del input
  let cadenaOriginal = document.getElementById("txtCadena").value;
  let cadenaInvertida = "";

  // 2. Itera a través de la cadena en orden inverso
  for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    // 3. Concatena cada carácter a la nueva cadena
    cadenaInvertida += cadenaOriginal[i];
  }

  // 4. Muestra el resultado
  document.getElementById("resultado").textContent = "Cadena invertida: " + cadenaInvertida;
};
