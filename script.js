// script.js

const events = [
    { date: '2024-08-28T11:15', title: 'Weekly Meeting', description: 'Bring your personal projects to Roadees' },
    { date: '2024-09-05T11:30', title: 'Weekly Meeting', description: 'Location to be determined' },
    // Add more events here
];

const news = [
    { date: '2024-08-24', title: 'Community Center Update', description: 'We are diligently working on making Knitting Crochet Discovery Bay an official community center class. Stay tuned for more details!' },
    // Add more news items here
];


function formatDateTime(dateTime) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Date(dateTime).toLocaleDateString('en-US', options);
}

function renderEvents() {
    const eventsList = document.getElementById('events-list');

    eventsList.innerHTML = events.map(event => `
        <li>
            <div class="event-date-time">${formatDateTime(event.date)}</div>
            <div class="event-title">${event.title}</div>
            <p class="event-description">${event.description}</p>
        </li>
    `).join('');
}

function renderNews() {
    const newsList = document.getElementById('news-list');

    newsList.innerHTML = news.map(newsItem => `
        <li>
            <div class="news-date-time">${formatDateTime(newsItem.date)}</div>
            <div class="news-title">${newsItem.title}</div>
            <p class="news-description">${newsItem.description}</p>
        </li>
    `).join('');
}



renderEvents();
renderNews();
// Call the function to render the sentence