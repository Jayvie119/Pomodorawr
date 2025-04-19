const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetVtn = document.getElementById('resetBtn');

let countdown;
let timeLeft = 25 * 60;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds/60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs :secs}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            isRunning = false;
            alert("Pomodoro session complete! Take a break.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = 25 * 60;
    timerDisplay.textContent = formatTime(timeLeft);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);