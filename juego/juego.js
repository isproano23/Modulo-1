let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
  let eleccionComputadora = generarElemento();
  document.getElementById("imagenComputadora");
  let resultado = determinarGanador(eleccionComputadora, seleccionado);

  let mensaje;
  if (resultado === 0) {
    mensaje = "empate";
  } else if (resultado === 1) {
    mensaje = "ganaste la partida";
    puntosUsuario++; // Incrementar puntos del usuario
  } else if (resultado === -1) {
    mensaje = "perdiste la partida";
    puntosComputador++; // Incrementar puntos del computador
  } else {
    mensaje = "Resultado inesperado";
  }

  // Actualizar los puntos en pantalla
  document.getElementById("puntosUsuario").textContent = puntosUsuario;
  document.getElementById("puntosComputador").textContent = puntosComputador;

  // Verificar si alguien llegó a 5 puntos
  if (puntosUsuario === 5) {
    document.getElementById("resultado").textContent = "has ganado el juego";
  } else if (puntosComputador === 5) {
    document.getElementById("resultado").textContent =
      "el computador te ha ganado";
  } else {
    document.getElementById("resultado").textContent = mensaje;
  }
};

limpiar = function () {
  
 
  document.getElementById("puntosUsuario")
  document.getElementById("puntosComputador")

  document.getElementById("imagenComputadora")

  document.getElementById("resultado").textContent = "";
};
