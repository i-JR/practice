//script.js

const quotes = [
    "Do what you can with all you have, wherever you are.",
    "Hard work beats talent when talent doesn't work hard."
];

document.getElementById('generateQuoteBtn').addEventListener('click',function() {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});