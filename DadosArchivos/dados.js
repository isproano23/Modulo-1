jugar = function () {
  let aleatorio;
  aleatorio = lanzarDado();
  cambiarTexto("lblNumero", aleatorio);

  if (aleatorio > 3) {
      cambiarTexto("lblNumero2","GANASTE" );
  } else {
    cambiarTexto("lblNumero2","PERDISTE ESTAS DE MALAS" );
  }
};
// Crear una funcion llamada lanzar dado no recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lanzarDado = function () {
  let aleatorio;
  let numeroMUltiplicado;
  let numeroEntero;
  let valorDado;
  aleatorio = Math.random();
  numeroMUltiplicado = aleatorio * 6;

  numeroEntero = parseInt(numeroMUltiplicado);

  valorDado = numeroEntero + 1;

  return valorDado;
};
