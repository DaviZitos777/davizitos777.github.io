let score = 0;

function incrementScore() {
    score++;
    document.getElementById("scoreValue").textContent = score;

    if (score === 10) {
        alert("Parabéns! Você alcançou 10 pontos!");
        resetGame();
    }
}

function resetGame() {
    score = 0;
    document.getElementById("scoreValue").textContent = score;
}
