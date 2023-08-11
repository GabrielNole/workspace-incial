document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;
  
      // Validar que los campos no estén vacíos y que el correo tenga un símbolo "@"
      if (emailValue.trim() === "" || !emailValue.includes("@") || passwordValue.trim() === "") {
        alert("Por favor, ingrese un correo electrónico válido y su contraseña.");
        return;
      }
  
      // Simulación de autenticación exitosa
      sessionStorage.setItem("authenticated", "true");
  
      // Redireccionar a la portada
      window.location.href = "my-profile.html";
    });
  
    // Detectar sesión iniciada en otras páginas
    if (window.location.pathname !== "/login.html" && !sessionStorage.getItem("authenticated")) {
      window.location.href = "login.html";
    }
  });