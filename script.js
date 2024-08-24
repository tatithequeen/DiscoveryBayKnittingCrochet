// script.js

const events = [
    { date: '2024-08-26', title: 'Weekly Meeting', description: 'Club members meeting in Room 101.' },
    { date: '2024-08-28', title: 'Workshop: Web Development', description: 'Hands-on workshop for beginners.' },
    { date: '2024-08-30', title: 'Social Event', description: 'Join us for a social evening at the local park.' },
    // Add more events here
];

function getCurrentWeekDates() {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1); // Adjust to start from Monday
    const endOfWeek = startOfWeek + 6;

    const start = new Date(today.setDate(startOfWeek));
    const end = new Date(today.setDate(endOfWeek));

    return { start, end };
}

function renderWeeklyEvents() {
    const { start, end } = getCurrentWeekDates();
    const eventsList = document.getElementById('events-list');

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= start && eventDate <= end;
    });

    eventsList.innerHTML = filteredEvents.map(event => `
        <li>
            <strong>${new Date(event.date).toLocaleDateString()}</strong>: ${event.title}
            <p>${event.description}</p>
        </li>
    `).join('');
}

renderWeeklyEvents();
