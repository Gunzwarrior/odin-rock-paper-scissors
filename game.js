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
let resulOfRound;
const winner = document.createElement("div");
const scoreBoard = document.querySelector("#scoreBoard");
scoreBoard.appendChild(winner);

const computerScoreDisplay = document.querySelector("#computerScore");
const playerScoreDisplay = document.querySelector("#playerScore")

function addPlayerScore(result) {
  if (result === "win") {
    playerScore++;
    console.log(playerScore);
    playerScoreDisplay.textContent = `Player : ${playerScore}`;
  }
}

function addComputerScore(result) {
  if (result === "lose") {
    computerScore++;
    console.log(computerScore);
    computerScoreDisplay.textContent = `Computer : ${computerScore}`;
  }
}

function declareWinner(playerCurrentScore, computerCurrentScore) {
  if (playerCurrentScore > computerCurrentScore) {
    winner.textContent = `You won ${playerScore} - ${computerScore} !`;
  }
  else {
    winner.textContent = `You Lost ${playerScore} - ${computerScore} !`;
  }
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `Player : ${playerScore}`;
  computerScoreDisplay.textContent = `Computer : ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === "rock" && computerSelection === "Rock") {
    result = "draw";
    results.textContent = "Draw! You both did Rock";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    result = "win";
    results.textContent = "You win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    result = "lose";
    results.textContent = "You loose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    result = "win";
    results.textContent = "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    result = "draw";
    results.textContent = "Draw! You both did Paper";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    result = "lose";
    results.textContent = "You loose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    result = "lose";
    results.textContent = "You loose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    result = "win";
    results.textContent = "You win! Scissors beats Paper";
  } else {
    result = "draw";
    results.textContent = "Draw! You both did Scissors";
  }
  console.log(result)
  return result;
}

function rockPlay() {
  resultOfRound = playRound("rock", computerPlay());
  addPlayerScore(resultOfRound);
  addComputerScore(resultOfRound);
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore)
  }
}

function paperPlay() {
  resultOfRound = playRound("paper", computerPlay());
  addPlayerScore(resultOfRound);
  addComputerScore(resultOfRound);
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore)
  }
}

function scissorsPlay() {
  resultOfRound = playRound("scissors", computerPlay());
  addPlayerScore(resultOfRound);
  addComputerScore(resultOfRound);
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore)
  }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", rockPlay);

const paper = document.querySelector("#paper");
paper.addEventListener("click", paperPlay);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", scissorsPlay);

const results = document.querySelector("#results");