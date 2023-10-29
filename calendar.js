// calendar.ts

function generateCalendar(year, month) {
    const calendarDates = document.getElementById('calendar-dates');
    const monthYearElement = document.getElementById('month-year');

    if (calendarDates && monthYearElement) {
        // Clear existing calendar dates
        calendarDates.innerHTML = '';

        // Set the calendar header
        const currentDate = new Date(year, month, 1);
        const options = { month: 'long', year: 'numeric' };
        monthYearElement.textContent = currentDate.toLocaleDateString(undefined, options);

        // Calculate the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Generate calendar dates
        for (let day = 1; day <= daysInMonth; day++) {
            if (day == 1) {
                var firstDate = new Date();
                firstDate.setDate(1);
                firstDate.setMonth(month);
                firstDate.setFullYear(year);

                weekDay = firstDate.getDay();
                if (weekDay != 0) {
                    for (let i = 0; i < weekDay;i++) {
                        const dateElement = document.createElement('div');
                        dateElement.classList.add('calendar-date');
                        dateElement.textContent = "";
                        calendarDates.appendChild(dateElement);
                    }
                }
            }
            const dateElement = document.createElement('div');
            dateElement.classList.add('calendar-date');
            dateElement.textContent = day.toString();
            calendarDates.appendChild(dateElement);
        }
    }
}

// Initialize the calendar
const today = new Date();
generateCalendar(today.getFullYear(), today.getMonth());

// Add event listeners to navigate to previous and next months
document.querySelector('.prev-month')?.addEventListener('click', () => {
    today.setMonth(today.getMonth() - 1);
    generateCalendar(today.getFullYear(), today.getMonth());
});

document.querySelector('.next-month')?.addEventListener('click', () => {
    today.setMonth(today.getMonth() + 1);
    generateCalendar(today.getFullYear(), today.getMonth());
});
