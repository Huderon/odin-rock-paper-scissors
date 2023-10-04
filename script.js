const roundsPerGame = 5;
const gameRules = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"]
};
const gameResults = {
  tie: "It's a tie!",
  playerWins: "Player wins!",
  computerWins: "Computer wins!"
};

function getComputerChoice() {
  const options = Object.keys(gameRules)
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice, computerChoice) {
  console.log(`Player chooses: ${playerChoice}\nComputer chooses: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    return gameResults.tie;
  }
  if (gameRules[playerChoice].includes(computerChoice)) {
    return gameResults.playerWins;
  }

  return gameResults.computerWins;
}