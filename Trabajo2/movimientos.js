movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

cargar = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");

}
ejecutarMovimientos = function () {
    let numeroCuenta = recuperarTexto("txtCampo1");
    filtrarMovimientos(numeroCuenta);
}
filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = [];
    for (let i = 0; i < movimientos.length; i++) {
        let posicion = movimientos[i];
        if (posicion.numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(posicion);
        }
    }
    mostrarMovimientos(movimientosCuenta);
}
mostrarMovimientos = function (misMovimientos) {
    let idTabla = document.getElementById("tablaMovimientos");
    let contenido = "<table><tr><th>NUMERO CUENTA</th><th>MONTO</th><th>TIPO</th></tr>";
    for (let i = 0; i < misMovimientos.length; i++) {
        let posicion = misMovimientos[i];
        if (posicion.tipo == "D") {
            contenido += "<tr><td>" + posicion.numeroCuenta + "</td>"
                + "<td>" + posicion.monto * -1 + "</td>"
                + "<td>" + posicion.tipo + "</td></tr> ";
        } else {
            contenido += "<tr><td>" + posicion.numeroCuenta + "</td>"
                + "<td>" + posicion.monto + "</td>"
                + "<td>" + posicion.tipo + "</td></tr> ";
        }
    }
    contenido += "</table>";
    idTabla.innerHTML = contenido;
}




