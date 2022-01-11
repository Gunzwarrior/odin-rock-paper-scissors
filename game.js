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
  let result;;
  if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Draw! You both did Rock")
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    result = 1;
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    result = 0;
    console.log("You loose! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    result = 1;
    console.log("You win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Draw! You both did Paper");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    result = 0;
    console.log("You loose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    result = 0;
    console.log("You loose! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    result = 1;
    console.log("You win! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    console.log("Draw! You both did Scissors");
  } else {
    result = "Please enter rock paper or scissors";
  }
  console.log(result)
  return result;
}

function rockPlay() {
  playRound("rock", computerPlay());
}

function paperPlay() {
  playRound("paper", computerPlay());
}

function scissorsPlay() {
  playRound("scissors", computerPlay());
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", rockPlay);

const paper = document.querySelector("#paper");
paper.addEventListener("click", paperPlay);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", scissorsPlay);