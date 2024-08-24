// script.js

const events = [
    { date: '2024-08-26', title: 'Weekly Meeting', description: 'Club members meeting in Room 101.' },
    { date: '2024-08-28', title: 'Workshop: Web Development', description: 'Hands-on workshop for beginners.' },
    { date: '2024-08-30', title: 'Social Event', description: 'Join us for a social evening at the local park.' },
    // Add more events here
];

function renderAllEvents() {
    const eventsList = document.getElementById('events-list');

    eventsList.innerHTML = events.map(event => `
        <li>
            <strong>${new Date(event.date).toLocaleDateString()}</strong>: ${event.title}
            <p>${event.description}</p>
        </li>
    `).join('');
}

renderAllEvents();
