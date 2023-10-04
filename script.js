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

function getPlayerChoice() {
  let playerChoice = "";

  do {
    playerChoice = prompt("Enter one of the following options: rock, paper, scissors", "").toLowerCase();

    if (!gameRules[playerChoice]) {
      alert("Enter a valid option.");
    }
  } while (!gameRules[playerChoice]);

  return playerChoice;
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

function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    const roundResult = playRound(getPlayerChoice(), getComputerChoice())

    if (roundResult === gameResults.playerWins) {
      playerScore++
    }
    if (roundResult === gameResults.computerWins) {
      computerScore++
    }

    console.log(`Round result: ${roundResult}\nCurrent Score: Player: ${playerScore} Computer: ${computerScore}`);
  }

  console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`);

  let result = gameResults.tie;

  if (playerScore > computerScore) {
    result = gameResults.playerWins;
  }
  if (playerScore < computerScore) {
    result = gameResults.computerWins;
  }

  return result;
}

game(roundsPerGame)