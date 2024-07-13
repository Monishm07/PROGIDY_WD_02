let interval;
let seconds = 0;
let isRunning = false;
const display = document.getElementById('display');

function startStop() {
    if (isRunning) {
        clearInterval(interval);
    } else {
        interval = setInterval(updateTime, 1000);
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    display.textContent = '00:00:00';
    document.body.style.background = getRandomColor();
}

function updateTime() {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
    
    if (seconds % 2 === 0) {
        document.body.style.background = getRandomColor();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
