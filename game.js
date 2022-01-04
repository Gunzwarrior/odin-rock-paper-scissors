// current step 6. write a game function that plays
// through 5 rounds and declares a winner

function computerPlay() {
  let answer;
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    answer = "Rock";
  } else if (randomNumber === 1) {
    answer = "Paper";
  } else {
    answer = "Scissors";
  }
  return answer;
}

let playerSelection;
let playerScore = 0;
let computerScore = 0;

function addPlayerScore(result) {
  if (result === 1) {
    playerScore++;
  }
}

function addComputerScore(result) {
  if (result === 0) {
    computerScore++;
  }
}

function declareWinner(playerCurrentScore, computerCurrentScore) {
  if (playerCurrentScore > computerCurrentScore) {
    console.log("You won");
    playerScore = 0;
    computerScore = 0;
  }
  else if (playerScore < computerScore) {
    console.log("You lost");
    playerScore = 0;
    computerScore = 0;
  } else { 
    console.log("Draw");
    playerScore = 0;
    computerScore = 0;
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === "ROCK" && computerSelection === "Rock") {
    console.log("Draw! You both did Rock")
  } else if (playerSelection === "ROCK" && computerSelection === "Scissors") {
    result = 1;
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection === "ROCK" && computerSelection === "Paper") {
    result = 0;
    console.log("You loose! Paper beats Rock");
  } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
    result = 1;
    console.log("You win! Paper beats Rock");
  } else if (playerSelection === "PAPER" && computerSelection === "Paper") {
    console.log("Draw! You both did Paper");
  } else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
    result = 0;
    console.log("You loose! Scissors beats Paper");
  } else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
    result = 0;
    console.log("You loose! Rock beats Scissors");
  } else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
    result = 1;
    console.log("You win! Scissors beats Paper");
  } else if (playerSelection === "SCISSORS" && computerSelection === "Scissors") {
    console.log("Draw! You both did Scissors");
  } else {
    result = "Please enter rock paper or scissors";
  }
  return result;
}

function game() {
  let round;
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper or scissors? ")
    round = playRound(playerSelection, computerPlay());
    addPlayerScore(round);
    addComputerScore(round);
  }
  return (declareWinner(playerScore, computerScore));
}