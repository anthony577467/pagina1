document.addEventListener('DOMContentLoaded', function() {
    var prevMonthButton = document.getElementById('prevMonth');
    var nextMonthButton = document.getElementById('nextMonth');
    var monthYearElement = document.getElementById('monthYear');
    var dateTimeElement = document.getElementById('dateTime');
    var calendarBody = document.getElementById('calendarBody');

    // Ejemplo de festividades
    var festividades = [
        // ... las festividades existentes ...
        {
          fecha: new Date(2023, 11, 1),
          nombre: 'Día de la Madre',
        },
      ];

    function updateDateTime() {
        var now = new Date();
        dateTimeElement.textContent = now.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    prevMonthButton.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar(currentMonth, currentYear);
    });

    function updateCalendar(month, year) {
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var daysInMonth = lastDay.getDate();

        monthYearElement.textContent = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long' }).format(firstDay);

        var firstDayOfWeek = firstDay.getDay();
        var dayCount = 1;

        calendarBody.innerHTML = '';

        for (var i = 0; i < 6; i++) {
            var row = document.createElement('tr');

            for (var j = 0; j < 7; j++) {
                var cell = document.createElement('td');

                if ((i === 0 && j < firstDayOfWeek) || dayCount > daysInMonth) {
                    cell.textContent = '';
                } else {
                    cell.textContent = dayCount;

                    var festividad = festividades.find(function(f) {
                        return f.fecha.getTime() === new Date(year, month, dayCount).getTime();
                    });

                    if (festividad) {
                        cell.classList.add('festividad');
                        cell.title = festividad.nombre;
                    }

                    if (
                        dayCount === currentDate.getDate() &&
                        month === currentDate.getMonth() &&
                        year === currentDate.getFullYear()
                    ) {
                        cell.classList.add('today');
                    }

                    dayCount++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }

        // Agrega el mensaje de festividad
        var today = new Date();
        var festivity = festividades.find(function(f) {
            return f.fecha.getTime() === today.getTime();
        });

        if (festivity) {
            calendarBody.querySelector('.festividades').textContent += ' / ¡Hoy se celebra el ' + festivity.nombre + '!';
        }
    }

    // Inicializa el calendario
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    updateCalendar(currentMonth, currentYear);
});