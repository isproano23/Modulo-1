function validarEstructura(placa) {
    let errores = "";
    if (placa.length !== 7 && placa.length !== 8) {
        errores += "La placa debe tener siete u ocho caracteres. ";
    }
    if (placa.charCodeAt(1) < 65 || placa.charCodeAt(1) > 90) {
        errores += "El segundo caracter debe ser una letra mayuscula. ";
    }
    if (placa.charCodeAt(2) < 65 || placa.charCodeAt(2) > 90) {
        errores += "El tercer caracter debe ser una letra mayuscula. ";
    }
    if (placa.charCodeAt(3) !== 45) {
        errores += "El cuarto caracter debe ser un guion. ";
    }
    if (placa.charCodeAt(4) < 48 || placa.charCodeAt(4) > 57) {
        errores += "El quinto caracter debe ser un digito. ";
    }
    if (placa.charCodeAt(5) < 48 || placa.charCodeAt(5) > 57) {
        errores += "El sexto carácter debe ser un digito. ";
    }
    if (placa.charCodeAt(6) < 48 || placa.charCodeAt(6) > 57) {
        errores += "El séptimo caracter debe ser un digito. ";
    }
    if (placa.length === 8) {
        if (placa.charCodeAt(7) < 48 || placa.charCodeAt(7) > 57) {
            errores += "El octavo caracter debe ser un digito. ";
        }
    }
    return errores === "" ? null : errores.trim();
}
function obtenerProvincia(placa) {
    if (!placa || placa.length < 1) {
        return null;
    }
    let primeraLetra = placa.charAt(0).toUpperCase();
    let provincias = {
        'A': 'Azuay',
        'B': 'Bolívar',
        'C': 'Carchi',
        'D': 'Orellana',
        'E': 'Esmeraldas',
        'F': 'Cañar',
        'G': 'Guayas',
        'H': 'Chimborazo',
        'I': 'Imbabura',
        'J': 'Loja',
        'K': 'Sucumbíos',
        'L': 'Pichincha',
        'M': 'Manabí',
        'N': 'Napo',
        'O': 'El Oro',
        'P': 'Pastaza',
        'Q': 'Tungurahua',
        'R': 'Los Ríos',
        'S': 'Morona Santiago',
        'T': 'Santo Domingo de los Tsáchilas',
        'U': 'Santa Elena',
        'V': 'Cotopaxi',
        'W': 'Galápagos',
        'X': 'Zamora Chinchipe',
        'Y': 'Zamora Chinchipe'
    };
    return provincias[primeraLetra] || null;
}


function obtenerTipoVehiculo(placa) {
    let partes = placa.split('-');
    if (partes.length !== 2) {
        return null;
    }
    
    let letras = partes[0].toUpperCase();
    if (letras.length < 2) {
        return null;
    }
    
    let segundoCaracter = letras.charAt(1);
    
    let tiposVehiculo = {
        'A': 'Automovil particular',
        'B': 'Bus',
        'C': 'Camion',
        'M': 'Motocicleta',
        'T': 'Taxi',
        'U': 'Vehiculo utilitario',
        'R': 'Remolque',
        'S': 'Servicio público',
    };
    
    return tiposVehiculo[segundoCaracter] || null;
}

function obtenerPicoYPlaca(placa) {
    let ultimoCaracter = placa.charAt(placa.length - 1);
    if (!/\d/.test(ultimoCaracter)) {
        return null;
    }
    const digito = parseInt(ultimoCaracter);
    const mapaDias = {
        1: 'Lunes',
        2: 'Lunes',
        3: 'Martes',
        4: 'Martes',
        5: 'Miércoles',
        6: 'Miércoles',
        7: 'Jueves',
        8: 'Jueves',
        9: 'Viernes',
        0: 'Viernes'
    };
    return mapaDias[digito] || null;
}
