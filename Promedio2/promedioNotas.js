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

  if (promedioF < 5 && promedioF > 0) {
    mostrarTexto("lblResultado", +valorredondeado + " REPROBADO ");
    mostrarImagen("imggif", "./imagenes/triste.gif");
  } else if(promedioF>=5 && promedioF<=8) {
    mostrarTexto("lblResultado", +valorredondeado + " BUEN TRABAJO ");
    mostrarImagen("imggif", "./imagenes/bienhecho.gif");
  }else if(promedioF>8 && promedioF<=10) {
    mostrarTexto("lblResultado", +valorredondeado + " APROBADO");
    mostrarImagen("imggif", "./imagenes/aplausos.gif");
  }
  
  
};
