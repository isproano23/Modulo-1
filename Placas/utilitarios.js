recuperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarFloat = function (idcomponente) {
  let valorCaja;
  let valorfloat;
  valorCaja = recuperarTexto(idcomponente);
  valorfloat = parseFloat(valorCaja);
  return valorfloat;
};

mostrarTexto = function (idcomponente, mensaje) {
  let componente;
  componente = document.getElementById(idcomponente);
  componente.innerHTML = mensaje;
};

mostrarImagen=function(idcomponente,rutaImagen){
  let componente
  componente=document.getElementById(idcomponente)
  componente.src= rutaImagen
}