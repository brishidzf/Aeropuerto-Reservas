document.getElementById("calcularPrecio").addEventListener("click", () => {
    const precio = Math.floor(Math.random() * 15) + 1;
    document.getElementById("precio").innerText = `Precio: S/ ${precio}`;
    document.getElementById("pagoSection").style.display = "block";
});

document.getElementById("formaPago").addEventListener("change", (e) => {
    if (e.target.value === "efectivo") {
        document.getElementById("mensajeEfectivo").style.display = "block";
        document.getElementById("formTarjeta").style.display = "none";
    } else if (e.target.value === "tarjeta") {
        document.getElementById("mensajeEfectivo").style.display = "none";
        document.getElementById("formTarjeta").style.display = "block";
    } else {
        document.getElementById("mensajeEfectivo").style.display = "none";
        document.getElementById("formTarjeta").style.display = "none";
    }
});

document.getElementById("confirmarEfectivo").addEventListener("click", () => {
    alert("Reserva confirmada. Recuerde pagar al llegar el transporte.");
    window.location.href = "viajero.html";
});

document.getElementById("confirmarTarjeta").addEventListener("click", () => {
    alert("Pago realizado. Reserva confirmada.");
    window.location.href = "viajero.html";
});
