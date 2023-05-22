let inactivityTime = 30; // tiempo en minutos
let inactivityTimer;

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(logout, inactivityTime * 60 * 1000);
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      console.log("Sesión cerrada por inactividad");
    })
    .catch((error) => {
      console.log(error);
    });
}

// Detectar actividad del usuario
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("click", resetInactivityTimer);

// Reiniciar el temporizador en la carga inicial de la página
resetInactivityTimer();
