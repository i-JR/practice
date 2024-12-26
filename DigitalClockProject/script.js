// script.js

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const currentDate = now.toLocaleDateString();
    const currentDay = now.toLocaleString('default', { weekday: 'long'});

    document.getElementById('time').textContent = time;

    document.getElementById('date').textContent = `Date: ${currentDate}`;
    

    document.getElementById('day').textContent = `Day: ${currentDay}`;
    
}


// Update clock every second
setInterval(updateClock, 1000);
updateClock();