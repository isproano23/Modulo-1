function validarPassword(password) {
    let errores = "";
    
    if (password.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres.\n";
    }
    
    if (password.length > 16) {
        errores += "La contraseña no debe exceder 16 caracteres.\n";
    }
    
    let hasUpper = false;
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
            break;
        }
    }
    if (!hasUpper) {
        errores += "Debe contener al menos una letra mayuscula.\n";
    }
    
    let hasDigit = false;
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            hasDigit = true;
            break;
        }
    }
    if (!hasDigit) {
        errores += "Debe contener al menos un digito.\n";
    }
    
    let hasSpecial = false;
    for (let char of password) {
        if (char === '*' || char === '-' || char === '_') {
            hasSpecial = true;
            break;
        }
    }
    if (!hasSpecial) {
        errores += "Debe contener al menos un caracter especial (*, -, _).\n";
    }
    
    return errores;
}

function ejecutarValidacion() {
    const password = document.getElementById('mipassword').value;
    const errores = validarPassword(password);
    if (errores === "") {
        alert("Password correcto");
    } else {
           
        alert(errores);
    }
}