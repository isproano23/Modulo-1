probarAtributos = function(){
    let persona = {
        nombre : "Isaac",
        apellido : "Proaño",
        edad : 22,
        estaVivo : true
    }

    console.log (persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }    
}

crearProductos = function (){
    let producto1 = {
        nombre:"Control de PlayStation",
        precio: 59.99,
        stock:8
    }

let producto2 = {
        nombre:"Control de Xbox",
        precio: 69.99,
        stock:12
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if(producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

modificarAtributos = function(){
    let cuenta={
        numero:"4535664",
        saldo:0.0
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente={
        cedula:"0150560811",
        nombre: "Isaac"
    }

    let cliente1 = {};

    cliente1.nombre="Isaac";
    cliente1.apellido="Proaño";
    cliente1.cedula="0150560811";

}


incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto;

}

probarIncrementarSaldo = function(){
    let cta = { numero:"3435", saldo:35.0 }
        incrementarSaldo(cta,100);
        console.log(cta.saldo);
    }


determinarMayor=function(persona1,persona2){
    if(persona1.edad > persona2.edad){
            return persona1;
    }else if (persona2.edad > persona1.edad){
        return persona2;
    }else{
        return null;
    }
}

probarDeterminarMayor = function(){
    let per1={nombre:"Isaac", edad:22};
    let per2={nombre:"Sebastian",edad:23};
    
    let mayor = determinarMayor(per1,per2);

    if(mayor != null){
        console.log("EL MAYOR ES: " + mayor.nombre);
    }
}