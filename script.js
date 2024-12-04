const gameArea = document.getElementById("gameArea");
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 30;

// Function to move the target to a random position
function moveTarget() {
    const x = Math.random() * (gameArea.offsetWidth - target.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - target.offsetHeight);
    target.style.left = ${x}px;
    target.style.top = ${y}px;
}

// Event listener for hitting the target
target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = Score: ${score};
    moveTarget();
});

// Countdown timer
const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = Time Left: ${timeLeft};
    if (timeLeft <= 0) {
        clearInterval(countdown);
        target.style.display = "none";
        alert(Game over! Your final score is ${score}.);
    }
}, 1000);

// Start the