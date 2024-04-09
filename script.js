function getComputerChoice() {
  choice = "";
  rspNum = Math.floor(Math.random() * 3) + 1;
  //console.log(rspNum);
  if (rspNum === 1) {
    choice = "rock";
  } else if (rspNum === 2) {
    choice = "scissors";
  } else if (rspNum === 3) {
    choice = "paper";
  }

  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "playerWins";
    } else {
      return "computerWins";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "playerWins";
    } else {
      return "computerWins";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "playerWins";
    } else {
      return "computerWins";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
