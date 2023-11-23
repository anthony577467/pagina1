const calendario = document.getElementById("calendario");

const fechasCivicas = [
    { fecha: "2023-01-01", descripcion: "Año Nuevo" },
    { fecha: "2023-01-06", descripcion: "Día de la Epifanía" },
    { fecha: "2023-02-14", descripcion: "Día de San Valentín" },
    { fecha: "2023-04-01", descripcion: "Semana Santa" },
    { fecha: "2023-05-01", descripcion: "Día del Trabajo" },
    { fecha: "2023-07-28", descripcion: "Fiestas Patrias" },
    { fecha: "2023-08-30", descripcion: "Día de Santa Rosa de Lima" },
    { fecha: "2023-10-08", descripcion: "Combate de Angamos" },
    { fecha: "2023-10-31", descripcion: "Día de la Canción Criolla" },
    { fecha: "2023-11-01", descripcion: "Día de Todos los Santos" },
    { fecha: "2023-12-08", descripcion: "Día de la Inmaculada Concepción" },
    { fecha: "2023-12-25", descripcion: "Navidad" },
    // Agrega más fechas aquí
];


function generarCalendario() {
    const table = document.createElement("table");
    const headerRow = table.insertRow(0);
    const th1 = document.createElement("th");
    th1.textContent = "Fecha";
    const th2 = document.createElement("th");
    th2.textContent = "Descripción";
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);

    for (const fecha of fechasCivicas) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = fecha.fecha;
        cell2.textContent = fecha.descripcion;
    }

    calendario.appendChild(table);
}

generarCalendario();

