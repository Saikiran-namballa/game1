<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shooting Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Shooting Game</h1>
    </header>
    <main>
        <div id="gameArea">
            <div id="target"></div>
        </div>
        <div id="score">Score: 0</div>
        <div id="timer">Time Left: 30</div>
    </main>
    <script src="script.js"></script>
</body>
</html>
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
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #222;
    color: white;
}

header {
    padding: 1rem;
    background-color: #444;
    color: white;
}

#gameArea {
    position: relative;
    width: 80%;
    height: 400px;
    margin: 2rem auto;
    border: 2px solid white;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
}

#target {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
}

#score, #timer {
    font-size: 20px;
    margin: 1rem 0;
}
