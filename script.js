// script.js

const calendarElement = document.getElementById('calendar');
const eventDateInput = document.getElementById('event-date');
const eventDescriptionInput = document.getElementById('event-description');
const saveEventButton = document.getElementById('save-event');

let events = {};

function getFutureTwoWeeks() {
    const today = new Date();
    const start = new Date(today);
    const end = new Date(today);
    end.setDate(today.getDate() + 13); // 2 weeks (14 days) from today

    return { start, end };
}

function renderCalendar() {
    calendarElement.innerHTML = '';
    const { start, end } = getFutureTwoWeeks();
    const days = [];

    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
        days.push(new Date(date));
    }

    days.forEach(date => {
        const dateStr = date.toISOString().split('T')[0];
        const day = date.getDate();
        const event = events[dateStr] || '';
        calendarElement.innerHTML += `
            <div data-date="${dateStr}">
                ${day}<br>${event}
            </div>
        `;
    });

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
        renderCalendar();
    }
}

renderCalendar();
saveEventButton.addEventListener('click', saveEvent);
