const picks = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return picks[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound() {
  const playerSelInsens = playerSelection.toUpperCase();
  const compSelInsens = computerSelection.toUpperCase();

  if (playerSelInsens === compSelInsens) {
    return "Draw!";
  } else if (playerSelInsens === "ROCK" && compSelInsens === "PAPER") {
    // computerScore++;
    return "Computer won!";
  } else if (playerSelInsens === "ROCK" && compSelInsens === "SCISSORS") {
    // playerScore++;
    return "Player won!";
  } else if (playerSelInsens === "PAPER" && compSelInsens === "ROCK") {
    // playerScore++;
    return "Player won!";
  } else if (playerSelInsens === "PAPER" && compSelInsens === "SCISSORS") {
    // computerScore++;
    return "Computer won!";
  } else if (playerSelInsens === "SCISSORS" && compSelInsens === "PAPER") {
    // playerScore++;
    return "Player won!";
  } else if (playerSelInsens === "SCISSORS" && compSelInsens === "ROCK") {
    // computerScore++;
    return "Computer won!";
  }
}

let playerSelection, computerSelection;

function gameA() {
  //this game runs until either the player or the computer gets 5 scores
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  while (playerScore !== 5 && computerScore !== 5) {
    playerSelection = prompt(
      `What's your pick? ${"Player: " + playerScore} ${
        "Computer: " + computerScore + " Draws: " + drawScore
      }`
    );

    computerSelection = getComputerChoice();
    if (playRound() === "Computer won!") {
      computerScore++;
    } else if (playRound() === "Player won!") {
      playerScore++;
    } else drawScore++;
  }
  console.log("Player's score: " + playerScore);
  console.log("Computer's score: " + computerScore);
  console.log("Draws: " + drawScore);
  return playerScore > computerScore ? "Player won!" : "Computer won!";
}

function gameB() {
  //this game runs 5 rounds then determines the winner
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
      `What's your pick? ${"Player: " + playerScore} ${
        "Computer: " + computerScore + " Draws: " + drawScore
      }`
    );

    computerSelection = getComputerChoice();
    if (playRound() === "Computer won!") {
      computerScore++;
    } else if (playRound() === "Player won!") {
      playerScore++;
    } else drawScore++;
  }
  console.log("Player's score: " + playerScore);
  console.log("Computer's score: " + computerScore);
  console.log("Draws: " + drawScore);
  if (playerScore > computerScore) {
    return "Player won!";
  } else if (computerScore > playerScore) {
    return "Computer won!";
  } else return "It's a draw!";
}
