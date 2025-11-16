mostrarNumeros = function () {
  console.log("antes del for");

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  console.log("despues del for");
};

mostrarNumeros2 = function () {
  console.log("antes del for");
  for (let indice = 1; indice <= 5; indice++) {
    console.log(indice);
  }

  console.log("despues del for");
};

mostrarPares = function () {
  console.log("antes del for");

  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }

  console.log("despues del for");
};

mostrarInversa = function () {
  console.log("antes del for");
  for (let y = 10; y >= 0; y--) {
    console.log(y);
  }
  console.log("despues del for");
};

hackeandoNasapeli=function(){
  for(let i=0;i<=100;i+=10){
    console.log(i)
    console.log("Hackeando Nasa " + i + "%")
    
  }
   console.log("LA NASA HA SIDOI HACKEADA XD")
}
mostrarImpares = function () {
  console.log("antes del for");
  for (let impar = 1; impar <=21; impar++) {
    if( impar %2 !=0){
  console.log(impar);
    }
    
  }
  
    console.log("despues del for")
};
