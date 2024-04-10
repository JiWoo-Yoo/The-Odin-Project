let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choice = "";
  rspNum = Math.floor(Math.random() * 3) + 1;
  if (rspNum === 1) {
    choice = "rock";
  } else if (rspNum === 2) {
    choice = "scissors";
  } else if (rspNum === 3) {
    choice = "paper";
  }

  return choice;
}

function paintScore(result, playerSelection, computerSelection) {
  const playerLabel = document.querySelector(".user-score");
  const computerLabel = document.querySelector(".com-score");
  playerLabel.textContent = `You: ${playerSelection} || score: ${playerScore}`;
  computerLabel.textContent = `Computer: ${computerSelection} || score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const playResult = document.createElement("h1");
    if (playerScore === computerScore) {
      // 동점으로 끝남
      playResult.textContent = "Tie! 동점으로 끝났습니다!";
    } else if (playerScore === 5) {
      // 사용자가 이김
      playResult.textContent = `You win! ${playerScore} : ${computerScore}`;
    } else if (computerScore === 5) {
      // 컴퓨터가 이김
      playResult.textContent = `You lose! ${playerScore} : ${computerScore}`;
    }
    document.body.appendChild(playResult);
  } else {
    const container = document.querySelector(".container");
    const oldPlayResult = document.querySelector(".play-result");
    if (oldPlayResult) {
      oldPlayResult.classList.remove("play-result");
      container.removeChild(oldPlayResult);
    }
    const newplayResult = document.createElement("h2");
    newplayResult.textContent = result + "!";
    newplayResult.classList.add("play-result");
    container.appendChild(newplayResult);
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  // check result
  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "playerWins";
    } else {
      result = "computerWins";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      result = "playerWins";
    } else {
      result = "computerWins";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "playerWins";
    } else {
      result = "computerWins";
    }
  }
  // add score
  if (result === "computerWins") {
    computerScore += 1;
  } else if (result === "playerWins") {
    playerScore += 1;
  }

  paintScore(result, playerSelection, computerSelection);
}

function handleRSPBtnClick(event) {
  playRound(event.target.textContent, getComputerChoice());
}

const h1 = document.createElement("h1");
const container = document.createElement("div");
container.classList.add("container");
const scoreDiv = document.createElement("div");
const btnDiv = document.createElement("div");
const resultDiv = document.createElement("div");

// divs inside of scoreDiv
const userScoreDiv = document.createElement("div");
const userScoreLabel = document.createElement("label");
userScoreLabel.classList.add("user-score");
userScoreLabel.textContent = `You: none || score: ${playerScore}`;
userScoreDiv.appendChild(userScoreLabel);
scoreDiv.appendChild(userScoreDiv);

const comScoreDiv = document.createElement("div");
const comScoreLabel = document.createElement("label");
comScoreLabel.classList.add("com-score");
comScoreLabel.textContent = `Computer: none || score: ${computerScore}`;
comScoreDiv.appendChild(comScoreLabel);
scoreDiv.appendChild(comScoreDiv);

// divs inside of btnDiv
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");

rockBtn.textContent = "rock";
scissorsBtn.textContent = "scissors";
paperBtn.textContent = "paper";

rockBtn.addEventListener("click", handleRSPBtnClick);
scissorsBtn.addEventListener("click", handleRSPBtnClick);
paperBtn.addEventListener("click", handleRSPBtnClick);

btnDiv.appendChild(rockBtn);
btnDiv.appendChild(scissorsBtn);
btnDiv.appendChild(paperBtn);

// divs inside of resultDiv

h1.textContent = "Rock Scissors Paper";
document.body.appendChild(h1);

container.appendChild(scoreDiv);
container.appendChild(btnDiv);
container.appendChild(resultDiv);

document.body.appendChild(container);
