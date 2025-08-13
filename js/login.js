document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuario.startsWith("VJ") && password === "260606") {
    window.location.href = "viajero.html";
  } else if (usuario.startsWith("AD") && password === "260606") {
    window.location.href = "admin.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
