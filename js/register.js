document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  if (dni.length < 8) {
    alert("El DNI debe tener al menos 8 dígitos");
    return;
  }

  const usuarioGenerado = "VJ" + dni;
  document.getElementById("generatedUser").innerText = 
    `Tu usuario generado es: ${usuarioGenerado}`;

  alert(`Usuario registrado:\nCorreo: ${correo}\nUsuario: ${usuarioGenerado}\nContraseña: ${password}`);
  window.location.href = "login.html";
});
