// current step 3. Make a function that randomly return
// rock paper or scissors.

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
  console.log(answer);
  return answer;
}

computerPlay();