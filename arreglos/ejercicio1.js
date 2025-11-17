let notas = [];

agregarElementos = function () {
  notas.push(5);
  notas.push(10);
  console.log(notas.length);
};

recorrerArreglo = function () {
  let notaR;
  for (let indice = 0; indice < notas.length; indice++) {
    notaR = notas[indice];

    console.log(notaR);
  }
};

probarAgregar = function () {
  let notaRecuperada;
  notaRecuperada = recuperarInt("txtNota");
  agregarNota(notaRecuperada);
};

agregarNota = function (nota) {
  notas.push(nota);
};

calcularPromedio = function () {
  let promedio = 0;
  let sumaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i]; // Sumar la nota actual a sumaNotas
  }
  promedio = sumaNotas / notas.length;

  return promedio;
};
 ejecutarPromedio=function() {
  let valorPromedio = calcularPromedio(); // Llama a la función y guarda el retorno
  console.log(valorPromedio); 
  // Muestra el valor en pantalla

  mostrarTexto("promedio",valorPromedio)
}