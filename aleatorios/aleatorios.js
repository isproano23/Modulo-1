generarAleatorios=function() {
  // a. Declarar e inicializar un arreglo
  let aleatorios = [];

  // b. Tomar el número del usuario y validarlo
  let inputUsuario = prompt("Ingresa un numero entre 5 y 20 :");
  let numeroIngresado = parseInt(inputUsuario);

  if (isNaN(numeroIngresado) || numeroIngresado < 5 || numeroIngresado > 20) {
    console.log("Por favor, ingresa un numero valido entre 5 y 20.");
    return; // Salir de la función si la entrada no es válida
  }

  // c. Crear un bucle for
  for (let i = 0; i < numeroIngresado; i++) {
    console.log("Índice actual:", i);
    // Asumiendo que se deben generar números aleatorios y agregarlos al arreglo
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Ejemplo: números aleatorios entre 1 y 100
    aleatorios.push(numeroAleatorio);
  }

  // Al salir del for, invocar a la función mostrarResultados
  mostrarResultados(aleatorios); // Asumiendo que mostrarResultados acepta el arreglo como parámetro
}

function mostrarResultados(arregloNumeros) {
  // Crea los elementos de la tabla
  let tabla = document.createElement('table');
  let encabezado = document.createElement('thead');
  let filaEncabezado = document.createElement('tr');
  let celdaEncabezado = document.createElement('th');

  // Añade el texto al encabezado
  celdaEncabezado.textContent = 'Numero';
  filaEncabezado.appendChild(celdaEncabezado);
  encabezado.appendChild(filaEncabezado);
  tabla.appendChild(encabezado);

  // Crea el cuerpo de la tabla
  let cuerpoTabla = document.createElement('tbody');

  // Itera sobre el arreglo para crear filas y celdas
  for (let i = 0; i < arregloNumeros.length; i++) {
    let fila = document.createElement('tr');
    let celda = document.createElement('td');
    celda.textContent = arregloNumeros[i];
    fila.appendChild(celda);
    cuerpoTabla.appendChild(fila);
  }

  // Añade el cuerpo a la tabla
  tabla.appendChild(cuerpoTabla);

  // Añade la tabla al documento para mostrarla en pantalla
  document.body.appendChild(tabla);
}