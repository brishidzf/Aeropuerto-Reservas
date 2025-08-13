// Dataset de ejemplo: hasta 13 reservas por usuario
const DATA_HISTORIAL = {
  "VJ74220494": [
    ["San Miguel", "2025-05-01", "07:30", 12.00, "Pagado"],
    ["Miraflores", "2025-05-03", "10:20", 15.00, "Pagado"],
    ["Callao", "2025-05-05", "06:15", 10.00, "Pagado"],
    ["Pueblo Libre", "2025-05-07", "08:10", 11.00, "Pendiente"],
    ["Magdalena", "2025-05-10", "14:50", 13.00, "Pagado"],
    ["Barranco", "2025-05-12", "09:00", 15.00, "Pagado"],
    ["Lince", "2025-05-15", "05:30", 12.00, "Pagado"],
    ["La Molina", "2025-05-18", "12:40", 15.00, "Pagado"],
    ["Surco", "2025-05-20", "18:25", 14.00, "Pendiente"],
    ["Jesús María", "2025-05-22", "07:10", 12.00, "Pagado"],
    ["San Isidro", "2025-05-24", "11:35", 15.00, "Pagado"],
    ["Chorrillos", "2025-05-26", "16:15", 13.00, "Pagado"],
    ["Breña", "2025-05-28", "20:00", 11.00, "Pagado"]
  ],
  "VJ65219876": [
    ["Miraflores", "2025-04-02", "08:00", 15.00, "Pagado"],
    ["Callao", "2025-04-10", "06:45", 10.00, "Pagado"],
    ["San Miguel", "2025-04-22", "09:15", 12.00, "Pendiente"]
  ],
  "VJ98371234": [
    ["Surquillo", "2025-03-05", "07:00", 13.00, "Pagado"],
    ["Barranco", "2025-03-12", "18:00", 15.00, "Pagado"],
    ["San Isidro", "2025-03-20", "10:30", 15.00, "Pagado"],
    ["Pueblo Libre", "2025-03-28", "05:50", 11.00, "Pendiente"]
  ],
  "VJ71934562": [
    ["San Borja", "2025-03-03", "06:40", 14.00, "Pagado"]
  ],
  "VJ80311245": [
    ["Lince", "2025-02-10", "09:10", 12.00, "Pagado"]
  ],
  "VJ66543219": [
    ["Jesús María", "2025-01-15", "13:30", 12.00, "Pagado"]
  ],
  "VJ70012854": [
    ["San Juan de Lurigancho", "2025-03-08", "04:50", 15.00, "Pagado"]
  ],
  "VJ55671230": [
    ["Villa El Salvador", "2025-03-10", "21:10", 15.00, "Pendiente"]
  ],
  "VJ91726354": [
    ["Comas", "2025-02-18", "07:25", 14.00, "Pagado"]
  ],
  "VJ87004561": [
    ["Rímac", "2025-04-14", "06:20", 12.00, "Pagado"]
  ],
  "VJ73450912": [
    ["La Victoria", "2025-04-22", "12:20", 12.00, "Pagado"]
  ],
  "VJ64821097": [
    ["Los Olivos", "2025-05-01", "05:00", 14.00, "Pagado"]
  ],
  "VJ88990011": [
    ["Chorrillos", "2025-04-03", "15:40", 13.00, "Pagado"]
  ],
  "VJ76543210": [
    ["Breña", "2025-05-05", "19:50", 11.00, "Pendiente"]
  ],
  "VJ60011223": [
    ["Magdalena", "2025-05-07", "16:05", 13.00, "Pagado"]
  ]
};

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

window.addEventListener('DOMContentLoaded', () => {
  const id = getParam('id') || 'VJ74220494';
  document.getElementById('tituloUsuario').innerText = `Reservas del Usuario ${id}`;

  const tbody = document.querySelector('#tablaHistorial tbody');
  tbody.innerHTML = '';

  const reservas = DATA_HISTORIAL[id] || [];
  if (reservas.length === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5;
    td.innerText = 'No hay reservas registradas para este usuario.';
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  // Mostrar hasta 13 reservas
  reservas.slice(0, 13).forEach(([origen, fecha, hora, monto, pago]) => {
    const tr = document.createElement('tr');

    const tdOrigen = document.createElement('td');
    tdOrigen.innerText = origen;

    const tdFecha = document.createElement('td');
    tdFecha.innerText = fecha;

    const tdHora = document.createElement('td');
    tdHora.innerText = hora;

    const tdMonto = document.createElement('td');
    tdMonto.innerText = monto.toFixed(2);

    const tdPago = document.createElement('td');
    tdPago.innerText = pago;

    tr.appendChild(tdOrigen);
    tr.appendChild(tdFecha);
    tr.appendChild(tdHora);
    tr.appendChild(tdMonto);
    tr.appendChild(tdPago);

    tbody.appendChild(tr);
  });
});
