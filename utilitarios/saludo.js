saludar = function () {
  let nombre;
  nombre = recuperarTexto("txtnombre");
  let apellido;
  apellido = recuperarTexto("txtapellido");
  let edad;
  edad = recuperarInt("txtedad");
  let estatura;
  estatura = recuperarFloat("txtestatura");

  let mensajeBienvenida = " BIENVENIDO " + nombre + apellido;
  mostrarTexto("lblResultado", mensajeBienvenida);

  msostrarImagen("imgSaludo", "./imagenes/hola.gif");
  mostrarTextoEnCaja("txtnombre", "");
};

