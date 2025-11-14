calcularValorDescuento = function (monto, porcentajeDescuento) {
  let valorDescuento;
  valorDescuento = (monto * porcentajeDescuento) / 100;
  return valorDescuento;
};

calcularIva = function (monto) {
  let totaliva;
  totaliva = monto * 0.12;
  return totaliva;
};
calcularSubtotal = function (precio, cantidad) {
  let totalapagar;
  totalapagar = precio * cantidad;
  return totalapagar;
};
calcularTotal = function (subtotal, descuento, iva) {
  let total;
  total = subtotal - descuento + iva;
  return total;
};