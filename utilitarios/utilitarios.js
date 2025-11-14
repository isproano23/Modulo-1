mostrarTextoEnCaja = function (idcomponente, mensaje) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.value = mensaje;
};

recuperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;

  return valorIngresado;
};

mostrarTexto = function (idcomponente, mensaje) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.innerText = mensaje;
};

msostrarImagen = function (idcomponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.src = rutaImagen;
};

recuperarInt = function (idcomponente) {
  let valorCaja;
  let valorEntero;
  valorCaja = recuperarTexto(idcomponente);
  valorEntero = parseInt(valorCaja);
  return valorEntero;
};
recuperarFloat = function (idcomponente) {
  let valorCaja;
  let valorFloat;
  valorCaja = recuperarTexto(idcomponente);
  valorFloat = parseFloat(valorCaja);
  return valorFloat;
};
