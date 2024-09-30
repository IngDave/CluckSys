let contenido = document.getElementById("contenido");

function ocultarPreloader(tiempo) {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, tiempo);

  setTimeout(() => {
    contenido.classList.remove("ocultar");
  }, tiempo);
}

function goToPage() {
  window.location.href = 'sign-in.html';
}

ocultarPreloader(2000);
