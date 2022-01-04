// current step 4. write a function that plays a single
// round of rock paper scissors

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

function playRound(playerSelection, computerSelection) {
  let result;
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === "ROCK" && computerSelection === "Rock") {
    result = "Draw! You both did Rock";
  } else if (playerSelection === "ROCK" && computerSelection === "Scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection === "ROCK" && computerSelection === "Paper") {
    result = "You loose! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
    result = "You win! Paper beats Rock";
  } else if (playerSelection === "PAPER" && computerSelection === "Paper") {
    result = "Draw! You both did Paper";
  } else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
    result = "You loose! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
    result = "You loose! Rock beats Scissors";
  } else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
    result = "You win! Scissors beats Paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "Scissors") {
    result = "Draw! You both did Scissors";
  } else {
    result = "Please enter rock paper or scissors";
  }
  return result;
}