recperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarFloat = function (idcomponente) {
  let valorCaja;
  let valorFloat;
  valorCaja = recperarTexto(idcomponente);
  valorFloat = parseFloat(valorCaja);
  return valorFloat;
};

mostrarTexto = function (idcomponente, mensaje) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.innerText = mensaje;
};

mostrarImagen = function (idcomponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.src = rutaImagen;
};
