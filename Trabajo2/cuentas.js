cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
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


    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */


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

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function(cuenta) {
    let existente = buscarCuenta(cuenta.numeroCuenta);
    if (existente !== null) {
        alert("CUENTA EXISTENTE");
    } else {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    }
};


    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA


    agregar = function() {
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

    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas

