let precioActual = 0;

function calcularPrecio() {
  // Precio aleatorio entre 8 y 15
  precioActual = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
  document.getElementById('precioTexto').innerText = "Precio: S/ " + precioActual.toFixed(2);

  // Mostrar contenedor de pago
  document.getElementById('pagoContainer').style.display = 'flex';

  // Escuchar cambios de método
  const metodo = document.getElementById('metodoPago');
  metodo.addEventListener('change', (e) => {
    const v = e.target.value;
    document.getElementById('infoEfectivo').style.display = (v === 'efectivo') ? 'block' : 'none';
    document.getElementById('formTarjeta').style.display = (v === 'tarjeta') ? 'block' : 'none';
  });
}

function confirmarPago() {
  const metodo = document.getElementById('metodoPago').value;
  const res = document.getElementById('resultadoPago');
  if (!metodo) {
    res.innerText = "Seleccione un método de pago.";
    return;
  }
  res.innerText = "Reserva registrada y pago " + (metodo === 'efectivo' ? "pendiente (efectivo al abordar)." : "simulado con tarjeta.") + " Monto: S/ " + precioActual.toFixed(2);
}
