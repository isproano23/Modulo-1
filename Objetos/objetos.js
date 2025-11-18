probarAtributos = function () {
  let persona = {
    nombre: "Pedro",
    apellido: "Moralees",
    edad: 24,
    estaVivo: true,
  };
  console.log(persona.nombre);
  console.log(persona.edad);
  if(persona.estaVivo==false){
   console.log("No esta vivo")
  }else{
    console.log("Si esta Vivo")
  }
};
 crearProducto=function() {
    // Crear la variable producto1 con atributos nombre (String), precio (float) y stock (int)
    var producto1 = {
        nombre: "Laptop",
        precio: 999.99,
        stock: 50
    };

    // Crear la variable producto2 con los mismos atributos pero valores distintos
    var producto2 = {
        nombre: "Mouse",
        precio: 29.99,
        stock: 200
    };

    // Comparar el stock de producto1 con el stock de producto2
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

modificarAtributos=function(){
  let cuenta={
    numero:"5396325263",
    saldo:"0.0"
  }
  cuenta.saldo=100;
  cuenta.saldo+=10
  console.log(cuenta.saldo)
}

crearCliente=function(){
  let cliente={
    cedula:"175696636",
    nombre:"Juan"
  }
   let cliente1={}
   cliente1.nombre="Romeo"
   cliente1.apellido="Salcedo"
   cliente1.cedula="123123"
}

probarIncrementoSaldo=function(){
    let cta ={numero:"263635",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo)
}
probarDeterminarMyor=function(){
  let per1={nombre:"Daniel",edad:"45"}
  let per2={nombre:"Luisa",edad:"48"}
  let mayor;
  mayor=determinarMayor(per1,per2)

  if(mayor!=null){
   console.log("El mayor es:"+mayor.nombre)
  }
}
incrementarSaldo=function(cuenta,monto){
 cuenta.saldo+=monto
}

determinarMayor=function(persona1,persona2){
  if(persona1.edad>persona2.edad){
    return persona1;
  }else if(persona2.edad>persona1.edad){
    return persona2;
  }else{
    return null;

  }
}