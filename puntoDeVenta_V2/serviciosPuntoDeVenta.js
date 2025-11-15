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

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let porcentajeDescuento=0;
  let montoDescuento

  if (cantidad < 3) {
    porcentajeDescuento = 0;
  } else if (cantidad >= 3 && cantidad <= 5) {
    porcentajeDescuento = 3;
  } else if (cantidad >= 6 && cantidad <= 11) {
    porcentajeDescuento = 4;
  } else if (cantidad >= 12) {
    porcentajeDescuento = 5;
  }

  montoDescuento=subtotal*(porcentajeDescuento/100)

  return montoDescuento;
  
};

