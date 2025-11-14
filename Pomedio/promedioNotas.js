clacularPromedioFinal = function () {
  let valor1;
  let valor2;
  let valor3;
  let promedioF;
  let valorredondeado;
  valor1 = recuperarFloat("txt1");
  valor2 = recuperarFloat("txt2");
  valor3 = recuperarFloat("txt3");

  promedioF = cacularProemedio(valor1, valor2, valor3);

  valorredondeado = promedioF.toFixed(2);

  if (promedioF >= 7 && promedioF < 10) {
    mostrarTexto("lblResultado", +valorredondeado + " APROBATE EL CURSO ");
    mostrarImagen("imggif", "./imagenes/aplausos.gif");
  } else {
    mostrarTexto("lblResultado", +valorredondeado + " REPROBASTE EL CURSO ");
    mostrarImagen("imggif", "./imagenes/triste.gif");
  }
};
