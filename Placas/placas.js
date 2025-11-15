function validarPlaca() {
    let placa = document.getElementById("miplaca").value;
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura === null) {
        // Obtener el día de pico y placa y guardarlo en una variable
        let diaPicoYPlaca = obtenerPicoYPlaca(placa);
        // Mostrar en pantalla el día que tiene pico y placa
        mostrarTexto("diaPicoYPlaca", diaPicoYPlaca);
        
        let provincia = obtenerProvincia(placa);
        if (provincia !== null) {
            mostrarTexto("provinciaNombre", provincia);
            let tipoVehiculo = obtenerTipoVehiculo(placa);
            if (tipoVehiculo !== null) {
                mostrarTexto("VehiculoNombre", tipoVehiculo);
            } else {
                mostrarTexto("VehiculoNombre", "tipo de vehículo incorrecto");
            }
        } else {
            alert("Provincia incorrecta");
        }
    } else {
        alert("estructura incorrecta: " + erroresEstructura);
    }
}
