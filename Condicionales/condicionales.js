function calcularTasaInteres(ingresoAnual) {
  if (ingresoAnual < 300000) {
    return 0.16; // 16%
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    return 0.15; // 15%
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    return 0.14; // 14%
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    return 0.13; // 13%
  } else { // ingresos >= 2000000
    return 0.12; // 12%
  }
}

function calcularCapacidadPago(edad, ingresos, egresos) {
  let capacidadPago;
  let porcentajeCapacidad50 = 0.3;
  let porcentajeCapacidad40 = 0.4;

  let dineroSobrante = ingresos - egresos;

  if (edad > 50) {
    capacidadPago = dineroSobrante * porcentajeCapacidad50;
  } else {
    capacidadPago = dineroSobrante * porcentajeCapacidad40;
  }

  let cuotaMensual = capacidadPago;

  return Math.max(0, cuotaMensual);
}

function calcularPrecioConDescuento(precio, cantidad) {
  let descuento = 0;

  if (cantidad >= 12) {
    descuento = 0.04;
  } else if (cantidad >= 6) {
    descuento = 0.03;
  } else if (cantidad >= 3) {
    descuento = 0.02;
  }

  let precio = precio * cantidad;
  let valorDescuento = precio * descuento;
  let precioFinal = precio - valorDescuento;

  return precioFinal;
}

function categorizarLDL(nivelColesterol) {
  if (nivelColesterol < 100) {
    return "Óptimo";
  } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
    return "Cerca del óptimo/Por encima del óptimo";
  } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
    return "Límite alto";
  } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
    return "Alto";
  } else if (nivelColesterol >= 190) {
    return "Muy alto";
  } else {
    return "Valor no válido";
  }
}

validarClave = function (clave) {
  if (clave >= 8 && clave <= 16) {
  } else {
    return false;
  }
};

esMayuscula = function (caracter) {
  if (caracter >= 65 && caracter <= 90) {
    return true;
  } else {
    return false;
  }
};

esMinuscula = function (caracter) {
  if (caracter >= 97 && caracter <= 122) {
    return true;
  } else {
    return false;
  }
};

esDigito = function (caracter) {
  if (caracter >= 48 && caracter <= 57) {
    return true;
  } else {
    return false;
  }
};

darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    return true;
  } else {
    return false;
  }
};

ototgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || (notaFisica > 90 && notaGeometria > 80)) {
    return true;
  } else {
    return false;
  }
};

dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    return true;
  } else if (notaFisica > notaMatematica) {
    return true;
  } else {
    return false;
  }
};