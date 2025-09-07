// Tomamos los inputs y elementos
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const form = document.querySelector(".form-registro");
const errores = document.getElementById("errores");

const set = new Set(); // Para guardar mensajes de error únicos

// Validar nombre (no vacío)
nombre.addEventListener("keyup", () => {
  if (nombre.value.trim().length === 0) {
    nombre.classList.add("error");
    set.add("⚠️ Completa el campo nombre");
  } else {
    nombre.classList.remove("error");
    set.delete("⚠️ Completa el campo nombre");
  }
  mostrarErrores();
});

// Validar mail (formato simple con "@")
mail.addEventListener("keyup", () => {
  if (!mail.value.includes("@") || mail.value.trim().length === 0) {
    mail.classList.add("error");
    set.add("⚠️ Formato de correo incorrecto");
  } else {
    mail.classList.remove("error");
    set.delete("⚠️ Formato de correo incorrecto");
  }
  mostrarErrores();
});

// Validar confirmación de contraseña
pass2.addEventListener("keyup", () => {
  if (pass1.value !== pass2.value || pass2.value.trim().length === 0) {
    pass2.classList.add("error");
    set.add("⚠️ Las contraseñas deben ser idénticas");
  } else {
    pass2.classList.remove("error");
    set.delete("⚠️ Las contraseñas deben ser idénticas");
  }
  mostrarErrores();
});

// Validar al enviar el formulario
form.addEventListener("submit", (e) => {
  mostrarErrores();
  if (set.size > 0) {
    e.preventDefault(); // Bloquea el envío si hay errores
    set.add("⚠️ Corrige los errores antes de continuar");
    mostrarErrores();
  }
});

// Función para mostrar los errores en pantalla
function mostrarErrores() {
  errores.innerHTML = [...set].map(err => `<p>${err}</p>`).join("");
}
