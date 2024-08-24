// script.js

const calendarElement = document.getElementById('calendar');
const eventDateInput = document.getElementById('event-date');
const eventDescriptionInput = document.getElementById('event-description');
const saveEventButton = document.getElementById('save-event');

let events = {};

function renderCalendar(year, month) {
    calendarElement.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarElement.innerHTML += '<div></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day).toISOString().split('T')[0];
        const event = events[date] || '';
        calendarElement.innerHTML += `
            <div data-date="${date}">
                ${day}<br>${event}
            </div>
        `;
    }

    addEventListeners();
}

function addEventListeners() {
    const dayCells = calendarElement.querySelectorAll('div[data-date]');
    dayCells.forEach(cell => {
        cell.addEventListener('click', () => {
            eventDateInput.value = cell.getAttribute('data-date');
            eventDescriptionInput.value = events[cell.getAttribute('data-date')] || '';
        });
    });
}

function saveEvent() {
    const date = eventDateInput.value;
    const description = eventDescriptionInput.value;

    if (date && description) {
        events[date] = description;
        renderCalendar(currentYear, currentMonth);
    }
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

renderCalendar(currentYear, currentMonth);
saveEventButton.addEventListener('click', saveEvent);
