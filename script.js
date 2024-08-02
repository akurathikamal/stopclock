let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

const minutesElement = document.querySelector('.min');
const secondsElement = document.querySelector('.sec');
const millisecondsElement = document.querySelector('.milli-sec');
const lapList = document.querySelector('.lap-items');

function startStopwatch() {
    if (!isRunning) {
        interval = setInterval(updateTime, 10); // Update every 10 milliseconds
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(interval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapList.appendChild(li);
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time}`.slice(-2) : time;
}

document.querySelector('.button button:nth-child(1)').addEventListener('click', startStopwatch);
document.querySelector('.button button:nth-child(2)').addEventListener('click', lapStopwatch);
document.querySelector('.button button:nth-child(3)').addEventListener('click', stopStopwatch);
document.querySelector('.button button:nth-child(4)').addEventListener('click', resetStopwatch);
