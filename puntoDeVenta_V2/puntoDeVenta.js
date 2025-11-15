calcularValorTotal = function () {
  //variables para recuperar los valores de las cajas de texto

  let nombreProducto = recuperarTexto("txtProducto");
  let precioProducto = recuperarTexto("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
  let cantidad = recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

  //variables para almacenar los retornos de las funciones
  let valorSubtotal = calcularSubtotal(precioProducto, cantidad);

  mostrarTexto("lblSubtotal", valorSubtotal);

  esProductoValido(nombreProducto, "lblError1");
  esPrecioValido(precioProducto, "lblError2");
  esCantidadValida(cantidad,"lblError3")


  let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
  mostrarTexto("lblDescuento", valorDescuento);
  let monto = valorSubtotal - valorDescuento;
  let valorIVA = calcularIva(monto);
  mostrarTexto("lblValorIVA", valorIVA);
  let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
  mostrarTexto("lblTotal", valorTotal);
};

limpiar = function () {};

esProductoValido = function (valor, idcomponenteError) {
  let hayErrores = false;

  if (valor == "") {
    mostrarTexto(idcomponenteError, "DEBE INGRESAR EL NOMBRE");
    hayErrores = true;
  } else {
    mostrarTexto(idcomponenteError, "");
  }
  return !hayErrores;
};

esPrecioValido = function (valor, idcomponenterror) {
  let hayErrores = false;
  
  if (isNaN(valor) || valor == null || valor === "") {  
    mostrarTexto(idcomponenterror, "DEBE INGRESAR UN NUMERO");
    hayErrores = true;
  } else {
    mostrarTexto(idcomponenterror, "");
  }
  
  return !hayErrores;
};
esCantidadValida = function (valor, idcomponenterror) {
  let hayErrores = false;
  
  if (isNaN(valor) || valor == null || valor === "") {  
    mostrarTexto(idcomponenterror, "DEBE INGRESAR UN NUMERO");
    hayErrores = true;
  } else {
    mostrarTexto(idcomponenterror, "");
  }
  
  return !hayErrores;
};