<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minigame</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        .game-container {
            text-align: center;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        #score {
            font-size: 18px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="game-container">
    <h1>Minigame: Clique no Botão!</h1>
    <button id="clickButton" onclick="incrementScore()">Clique Aqui!</button>
    <p id="score">Pontuação: <span id="scoreValue">0</span></p>
</div>

<script>
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
</script>

</body>
</html>
