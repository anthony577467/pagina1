async function cargarFechasCivicasHoy() {
    const response = await fetch('/api/fechas-civicas-hoy');
    const fechas = await response.json();

    const fechasLista = document.getElementById('fechas-lista');
    fechasLista.innerHTML = '<h2>Fechas Cívicas de Hoy</h2>';

    if (fechas.length === 0) {
      fechasLista.innerHTML += '<p>No hay fechas cívicas para hoy.</p>';
    } else {
      fechasLista.innerHTML += '<ul>';
      fechas.forEach((fecha) => {
        fechasLista.innerHTML += `<li>${fecha.namecal} - ${fecha.desccal} - ${fecha.datecal}</li>`;
      });
      fechasLista.innerHTML += '</ul>';
    }
  }
  cargarFechasCivicasHoy();