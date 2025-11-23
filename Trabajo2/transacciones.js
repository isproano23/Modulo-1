cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function(numeroCuenta) {
    for (let cuenta of cuentas) {
        if (cuenta.numeroCuenta === numeroCuenta) {
            return cuenta;
        }
    }
    return null;
};



    ejecutarBusqueda = function() {
    let numeroCuenta = recuperarTexto("txtBuscarCuenta");
    let cuenta = buscarCuenta(numeroCuenta);

    if (cuenta !== null) {
        let mensaje = `Cuenta: ${cuenta.numeroCuenta}\nNombre: ${cuenta.nombre} ${cuenta.apellido}\nSaldo: $${cuenta.saldo.toFixed(2)}`;
        mostrarTexto("resultadoBusqueda", mensaje);
    } else {
        alert("CUENTA NO ENCONTRADA");
    }
};


    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert

    depositar = function(numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada !== null) {
        cuentaAfectada.saldo += monto;
    }
};


    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro



    ejecutarDeposito = function() {
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

    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta


    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro


retirar = function(numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    if (cuentaAfectada !== null) {
        if (cuentaAfectada.saldo >= monto) {
            cuentaAfectada.saldo -= monto;
            alert("TRANSACCION EXITOSA");
            let mensaje = `Nuevo saldo: $${cuentaAfectada.saldo.toFixed(2)}`;
            mostrarTexto("resultadoTransaccion", mensaje);
        } else {
            alert("SALDO INSUFICIENTE");
        }
    } else {
        alert("CUENTA NO ENCONTRADA");
    }
};

ejecutarRetiro = function() {
    let numeroCuenta = recuperarTexto("txtBuscarCuenta");
    let monto = recuperarFloat("txtMontoTransaccion");

    retirar(numeroCuenta, monto);
};

    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
