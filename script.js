let playerScore = 0;
let computerScore = 0;
let finScore;

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

function showResult() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const playResult = document.createElement("h1");
  const resultScore = document.createElement("h1");
  const resultBtnDiv = document.createElement("div");
  const replayBtn = document.createElement("button");
  const selectScoreBtn = document.createElement("button");
  playResult.classList.add("result-text");
  resultScore.classList.add("result-score");
  resultBtnDiv.classList.add("result-btn-div");
  if (playerScore === computerScore) {
    // 동점으로 끝남
    playResult.textContent = "🤝🏻Tie! 동점으로 끝났습니다!🤝🏻";
  } else if (playerScore === finScore) {
    // 사용자가 이김
    playResult.textContent = "🎉You win!🎉";
  } else if (computerScore === finScore) {
    // 컴퓨터가 이김
    playResult.textContent = "🤦🏻‍♀️You lose!🤦🏻‍♂️";
  }

  resultScore.textContent = `${playerScore} : ${computerScore}`;
  replayBtn.textContent = "Replay";
  selectScoreBtn.textContent = "Choose Max Score";

  replayBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.body.innerHTML = "";
    startGame(finScore);
  });
  selectScoreBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.body.innerHTML = "";
    finScore = 0;
    selectScore();
  });

  container.appendChild(playResult);
  container.appendChild(resultScore);
  resultBtnDiv.appendChild(replayBtn);
  resultBtnDiv.appendChild(selectScoreBtn);
  container.appendChild(resultBtnDiv);
}
function paintScore(result) {
  const userScore = document.querySelector(".user-score");
  const uScore = userScore.querySelector(".score");
  const comScore = document.querySelector(".com-score");
  const cScore = comScore.querySelector(".score");
  uScore.textContent = `${playerScore}`;
  cScore.textContent = `${computerScore}`;
  if (playerScore === finScore || computerScore === finScore) {
    showResult();
  } else {
    const playResult = document.querySelector(".play-result");
    playResult.textContent = result + "!";
  }
}

function paintRSP(userHand, pcHand) {
  const userHandImg = document.querySelector(".user-hand");
  const pcHandImg = document.querySelector(".pc-hand");

  if (userHand === "rock") {
    userHandImg.textContent = "✊🏻";
  } else if (userHand === "scissors") {
    userHandImg.textContent = "✌🏻";
  } else if (userHand === "paper") {
    userHandImg.textContent = "✋🏻";
  }

  if (pcHand === "rock") {
    pcHandImg.textContent = "✊🏻";
  } else if (pcHand === "scissors") {
    pcHandImg.textContent = "✌🏻";
  } else if (pcHand === "paper") {
    pcHandImg.textContent = "✋🏻";
  }
}

function playRound(playerSelection, computerSelection) {
  paintRSP(playerSelection, computerSelection);
  let result = "";
  // check result

  if (playerSelection === computerSelection) {
    result = "😅tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "🤩Win";
    } else {
      result = "😥Lose";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      result = "🤩Win";
    } else {
      result = "😥Lose";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "🤩Win";
    } else {
      result = "😥Lose";
    }
  }
  // add score
  if (result === "😥Lose") {
    computerScore += 1;
  } else if (result === "🤩Win") {
    playerScore += 1;
  }

  paintScore(result);
}

function handleRSPBtnClick(event) {
  playRound(event.target.name, getComputerChoice());
}

function startGame(inputScore) {
  finScore = inputScore;
  const h1 = document.createElement("h1");
  const container = document.createElement("div");
  const playResult = document.createElement("div");
  container.classList.add("container");
  playResult.classList.add("play-result");
  const scoreDiv = document.createElement("div");
  const mainBoardDiv = document.createElement("div");
  const playerHandDiv = document.createElement("div");
  const btnDiv = document.createElement("div");
  const pcHandDiv = document.createElement("div");

  // divs inside of scoreDiv
  scoreDiv.classList.add("score-container");
  const userScoreDiv = document.createElement("div");
  const userName = document.createElement("div");
  const userScore = document.createElement("div");
  userScoreDiv.classList.add("user-score");
  userName.classList.add("name");
  userScore.classList.add("score");
  userName.textContent = "You";
  userScore.textContent = `${playerScore}`;
  userScoreDiv.appendChild(userName);
  userScoreDiv.appendChild(userScore);
  scoreDiv.appendChild(userScoreDiv);

  scoreDiv.appendChild(playResult); // 판마다의 결과

  const comScoreDiv = document.createElement("div");
  const comName = document.createElement("div");
  const comScore = document.createElement("div");
  comScoreDiv.classList.add("com-score");
  comName.classList.add("name");
  comScore.classList.add("score");
  comName.textContent = "Computer";
  comScore.textContent = `${computerScore}`;
  comScoreDiv.appendChild(comName);
  comScoreDiv.appendChild(comScore);
  scoreDiv.appendChild(comScoreDiv);

  // divs of main board
  mainBoardDiv.classList.add("main-board");

  // divs of hand img
  playerHandDiv.classList.add("user-hand");
  pcHandDiv.classList.add("pc-hand");

  playerHandDiv.textContent = "You";
  pcHandDiv.textContent = "PC";

  // divs inside of btnDiv
  btnDiv.classList.add("btn-div");
  const rockBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");
  const paperBtn = document.createElement("button");

  rockBtn.textContent = "rock✊🏻";
  scissorsBtn.textContent = "scissors✌🏻";
  paperBtn.textContent = "paper🖐🏻";

  rockBtn.name = "rock";
  scissorsBtn.name = "scissors";
  paperBtn.name = "paper";

  rockBtn.addEventListener("click", handleRSPBtnClick);
  scissorsBtn.addEventListener("click", handleRSPBtnClick);
  paperBtn.addEventListener("click", handleRSPBtnClick);

  btnDiv.appendChild(rockBtn);
  btnDiv.appendChild(scissorsBtn);
  btnDiv.appendChild(paperBtn);

  mainBoardDiv.appendChild(playerHandDiv);
  mainBoardDiv.appendChild(btnDiv);
  mainBoardDiv.appendChild(pcHandDiv);

  h1.textContent = "Rock, Scissors, Paper!";
  document.body.appendChild(h1);

  container.appendChild(scoreDiv);
  container.appendChild(mainBoardDiv);

  document.body.appendChild(container);
}

// 맨 첫 화면(승리 점수 고르는 화면)
function selectScore() {
  const startLabel = document.createElement("div");
  const inputForm = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input = document.createElement("input");

  startLabel.textContent = "Start";
  startLabel.classList.add("start-label");
  inputForm.classList.add("input-form");
  inputLabel.setAttribute("for", "fin-score");
  inputLabel.textContent = "Max Score:";
  input.setAttribute("autofocus", "true");
  input.setAttribute("type", "number");
  input.setAttribute("id", "fin-score");
  input.setAttribute("value", 1);
  input.setAttribute("min", 1);
  input.setAttribute("max", 10);

  document.body.appendChild(startLabel);
  inputForm.appendChild(inputLabel);
  inputForm.appendChild(input);
  document.body.appendChild(inputForm);

  startLabel.addEventListener("click", () => {
    const inputScore = Number(input.value);
    if (inputScore < 1 || inputScore > 10) {
      alert("Invalid Input! Please Enter Score 1~10.");
    } else {
      startLabel.remove();
      inputLabel.remove();
      input.remove();
      inputForm.remove();
      startGame(inputScore);
    }
  });
}

selectScore();
