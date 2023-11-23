//calendario

const calendario = document.getElementById("calendario");

// Crear una función para generar el calendario del año 2023
function generarCalendario() {
    const fechaActual = new Date("2023-01-01"); // Comienza en el 1 de enero de 2023
    const ultimoDia = new Date("2023-12-31");

    const table = document.createElement("table");
    table.classList.add("calendario");

    while (fechaActual <= ultimoDia) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = fechaActual.getDate();
        row.appendChild(cell);
        table.appendChild(row);

        // Avanzar al siguiente día
        fechaActual.setDate(fechaActual.getDate() + 1);

        // Saltar a la siguiente fila si es un nuevo mes
        if (fechaActual.getDate() === 1) {
            calendario.appendChild(table);
            table = document.createElement("table");
            table.classList.add("calendario");
        }
    }

    calendario.appendChild(table);
}

generarCalendario();