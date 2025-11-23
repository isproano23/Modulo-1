cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]
//------------Inicio Funciones Cuentas----------//
cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

mostrarCuentas = function () {
    let html = "<table border='1'><tr><th>NUMERO CUENTA</th><th>NOMBRE</th><th>SALDO</th></tr>";
    for (let cuenta of cuentas) {
        html += `<tr>
                    <td>${cuenta.numeroCuenta}</td>
                    <td>${cuenta.nombre} ${cuenta.apellido}</td>
                    <td>${cuenta.saldo.toFixed(2)}</td>
                </tr>`;
    }
    html += "</table>";
    document.querySelector("#divCuentas .inferior").innerHTML = html;
};
buscarCuenta = function (numeroCuenta) {
    for (let cuenta of cuentas) {
        if (cuenta.numeroCuenta === numeroCuenta) {
            return cuenta;
        }
    }
    return null;
};
agregar = function () {
    let numeroCuenta = recuperarTexto("txtCampo1");
    let nombre = recuperarTexto("txtCampo2");
    let apellido = recuperarTexto("txtCampo3");

    let cuenta = {
        numeroCuenta: numeroCuenta,
        cedula: "0000000000", // valor por defecto
        nombre: nombre,
        apellido: apellido,
        saldo: 0.0
    };

    agregarCuenta(cuenta);
    mostrarCuentas();
};
//------------Final Funciones Cuentas----------//


//------------Inicia Funciones Movimientos----------//
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
//------------Final Funciones Movimientos----------//


//------------Inicio Funciones Transacciones----------//
ejecutarBusqueda = function () {
    let numeroCuenta = recuperarTexto("txtBuscarCuenta");
    let cuenta = buscarCuenta(numeroCuenta);

    if (cuenta !== null) {
        let mensaje = `Cuenta: ${cuenta.numeroCuenta}\nNombre: ${cuenta.nombre} ${cuenta.apellido}\nSaldo: $${cuenta.saldo.toFixed(2)}`;
        mostrarTexto("resultadoBusqueda", mensaje);
    } else {
        alert("CUENTA NO ENCONTRADA");
    }
};
depositar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada !== null) {
        cuentaAfectada.saldo += monto;
        let depositoC = {}
        depositoC.numeroCuenta = numeroCuenta;                          //Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento                                                                       
        depositoC.monto = monto;                  //=========>>>>          //con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
        depositoC.tipo = "C";                                              //y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos
        movimiento.push(depositoC);
    }
};
ejecutarDeposito = function () {
    let numeroCuenta = recuperarTexto("txtBuscarCuenta");
    let monto = recuperarFloat("txtMontoTransaccion");

    let cuenta = buscarCuenta(numeroCuenta);
    if (cuenta === null) {
        alert("CUENTA NO ENCONTRADA");
        return;
    }

    depositar(numeroCuenta, monto);
    alert("TRANSACCION EXITOSA");

    let mensaje = `Nuevo saldo: $${cuenta.saldo.toFixed(2)}`;
    mostrarTexto("resultadoTransaccion", mensaje);
};
retirar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada !== null) {
        if (cuentaAfectada.saldo >= monto) {
            cuentaAfectada.saldo -= monto;
            alert("TRANSACCION EXITOSA");
            let mensaje = `Nuevo saldo: $${cuentaAfectada.saldo.toFixed(2)}`;
            mostrarTexto("resultadoTransaccion", mensaje);
            let retiroD = {};
            retiroD.numeroCuenta = numeroCuenta;                             //Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
            retiroD.monto = monto;                     //========>>>>>>     //con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
            retiroD.tipo = "D";                                             //y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos
        } else {
            alert("SALDO INSUFICIENTE");
        }
    } else {
        alert("CUENTA NO ENCONTRADA");
    }
};

ejecutarRetiro = function () {
    let numeroCuenta = recuperarTexto("txtBuscarCuenta");
    let monto = recuperarFloat("txtMontoTransaccion");

    retirar(numeroCuenta, monto);

};
//------------Final Funciones Transacciones----------//

mostrarCuentasUI = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
}
mostrarTransaccionesUI = function () {
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    mostrarComponente("divTransacciones");
}
mostrarMovimientosUI = function () {
    ocultarComponente("divCuentas");
    mostrarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
}









