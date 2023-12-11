const gameChoicesContainer = document.querySelector(".game__choices");
const gameChoices = gameChoicesContainer.querySelectorAll(".game__choice-button");
const roundResultDisplay = document.querySelector("#game-result");
const playerChoiceDisplay = document.querySelector("#player-hand");
const computerChoiceDisplay = document.querySelector("#computer-hand");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const gameResultModal = document.querySelector("#modal");
const finalResultDisplay = document.querySelector("#final-result");
const restartButton = document.querySelector("#restart-button");
const gameRules = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
};
const gameResults = {
  tie: "It's a tie!",
  playerWins: "Player wins!",
  computerWins: "Computer wins!",
};
const gameState = {
  playerScore: 0,
  computerScore: 0,
  maxScore: 5,
};

gameChoicesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.parentElement === gameChoicesContainer) {
    playRound(target.id, getComputerChoice());
  }
});
restartButton.addEventListener("click", restartGame);

function getComputerChoice() {
  const options = Object.keys(gameRules);
  return options[Math.floor(Math.random() * options.length)];
}

function updateScores() {
  playerScoreDisplay.innerText = gameState.playerScore;
  computerScoreDisplay.innerText = gameState.computerScore;
}

function playRound(playerChoice, computerChoice) {
  playerChoiceDisplay.innerText = playerChoice;
  computerChoiceDisplay.innerText = computerChoice;

  if (playerChoice === computerChoice) {
    roundResultDisplay.innerText = gameResults.tie;
  }
  if (gameRules[playerChoice].includes(computerChoice)) {
    roundResultDisplay.innerText = gameResults.playerWins;
    gameState.playerScore++;
  }
  if (gameRules[computerChoice].includes(playerChoice)) {
    roundResultDisplay.innerText = gameResults.computerWins;
    gameState.computerScore++;
  }

  updateScores();

  if (
    gameState.playerScore === gameState.maxScore ||
    gameState.computerScore == gameState.maxScore
  ) {
    endGame();
  }
}

function endGame() {
  gameChoices.forEach((choice) => {
    choice.disabled = true;
  });

  if (gameState.playerScore === gameState.maxScore) {
    finalResultDisplay.innerText = gameResults.playerWins;
  }
  if (gameState.computerScore === gameState.maxScore) {
    finalResultDisplay.innerText = gameResults.computerWins;
  }

  gameResultModal.style.display = "flex";
}

function restartGame() {
  gameState.computerScore = 0;
  gameState.playerScore = 0;
  playerChoiceDisplay.innerText = "";
  computerChoiceDisplay.innerText = "";

  updateScores();

  gameChoices.forEach((choice) => {
    choice.disabled = false;
  });

  gameResultModal.style.display = "none";
}