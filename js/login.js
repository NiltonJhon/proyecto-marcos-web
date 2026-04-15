let errorEmailMsg = "Debes ingresar el email";
let errorPassMsg = "Debes ingresar la contraseña";
let errorInvalidEmail = "Email no válido";

function togglePassword() {
  const input = document.getElementById("input-password");
  const icon = document.getElementById("toggleIcon");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

// --- EVENTO PRINCIPAL ---
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("input-email").value;
    const pass = document.getElementById("input-password").value;
    const errorBox = document.getElementById("error-box");
    const errorText = document.getElementById("error-text");

    let errors = [];

    // Validar Email vacío
    if (email.trim() === "") {
      errors.push(errorEmailMsg);
    }

    // Validar formato de Email (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() !== "" && !emailRegex.test(email)) {
      errors.push(errorInvalidEmail);
    }

    // Validar Password vacío
    if (pass.trim() === "") {
      errors.push(errorPassMsg);
    }

    // Mostrar errores o éxito
    if (errors.length > 0) {
      errorText.innerHTML = errors.join("<br>");
      errorBox.classList.remove("d-none");
    } else {
      errorBox.classList.add("d-none");

      // Lanzar el MODAL de Bootstrap
      const modalElement = document.getElementById('loginSuccessModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  });

  document.getElementById("input-email").addEventListener("input", function () {
    if (this.value.includes("@")) {
      this.style.borderColor = "green";
    } else {
      this.style.borderColor = "red";
    }
  });
});

function goToHome() {
  window.location.href = "/";
}

// --- FUNCIÓN DE IDIOMA (CORREGIDA) ---
function setLanguage(lang) {
  const langs = document.querySelectorAll(".lang");
  langs.forEach(el => el.classList.remove("active"));

  const errorBox = document.getElementById("error-box");
  errorBox.classList.add("d-none");

  if (lang === "es") {
    langs[0].classList.add("active");

    // Actualizar mensajes de error
    errorEmailMsg = "Debes ingresar el email";
    errorPassMsg = "Debes ingresar la contraseña";
    errorInvalidEmail = "Email no válido";

    // Actualizar interfaz
    document.getElementById("label-email").innerText = "Email";
    document.getElementById("input-email").placeholder = "Ingresa tu email";
    document.getElementById("label-password").innerText = "Contraseña";
    document.getElementById("input-password").placeholder = "Contraseña";
    document.getElementById("btn-login").innerText = "Ingresa";
    document.getElementById("forgot").innerText = "¿Olvidaste tu contraseña?";
    document.getElementById("register").innerText = "¿Aún no tienes cuenta? Regístrate";

  } else {

    if (langs[1]) langs[1].classList.add("active");

    errorEmailMsg = "You must enter your email";
    errorPassMsg = "You must enter your password";
    errorInvalidEmail = "Invalid email";

    document.getElementById("label-email").innerText = "Email";
    document.getElementById("input-email").placeholder = "Enter your email";
    document.getElementById("label-password").innerText = "Password";
    document.getElementById("input-password").placeholder = "Password";
    document.getElementById("btn-login").innerText = "Sign In";
    document.getElementById("forgot").innerText = "Forgot your password?";
    document.getElementById("register").innerText = "Don't have an account yet? Sign up";
  }
}