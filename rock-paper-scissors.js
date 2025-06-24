// Computer choice
function getComputerChoice() {
  let computerChoice = "";
  let randomNum = Math.floor(Math.random() * 10);

  if (randomNum >= 0 && randomNum <= 3) {
    computerChoice = "rock";
  } else if (randomNum > 3 && randomNum <= 6) {
    computerChoice = "paper";
  } else if (randomNum > 6 && randomNum < 10) {
    computerChoice = "scissors";
  }
  console.log(`Computer's choice: ${computerChoice}`);
  return computerChoice;
}
// Human Choice
function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: Rock,Paper or Scissors");
  console.log(`Your Choice: ${humanChoice}`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let winner = "";

// logic
function playGame() {

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie.");
      return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
      return humanScore += 1;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
      return computerScore += 1;
    }

  }

  for (let i = 0; i < 5; i++) {

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`);
  }

  if (humanScore === computerScore) {
    winner = "This round is a tie.";
  } else if (humanScore > computerScore) {
    winner = "Player Wins the round!";
  } else {
    winner = "Computer Wins the round!";
  }
  return winner;
}
playGame();
console.log(winner)