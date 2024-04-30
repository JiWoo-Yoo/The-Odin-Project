const btnDiv = document.querySelector(".btn-div");
const askSquaresBtn = document.createElement("button");
const container = document.querySelector(".container");
let squareCnt = 16;

function handleAskSquaresBtnClick() {
  const squares = window.prompt(
    "How many squares do you want? (1 ~ 100) ",
    squareCnt
  );
  if (isNaN(squares) || squares > 100 || squares < 1) {
    alert("Invalid choice. please enter number 1~100.");
  } else {
    squareCnt = Number(squares);
    container.innerHTML = "";
    addSquares(squareCnt, 500);
  }
}

function onMouseOver(event) {
  event.target.classList.add("hovering");
}

function addSquares(squareCnt, containerSide) {
  sideSize = `${containerSide / squareCnt}px`;
  for (let j = 0; j < squareCnt * squareCnt; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = sideSize;
    square.style.height = sideSize;
    square.addEventListener("mouseover", onMouseOver);
    container.appendChild(square);
  }
}
askSquaresBtn.textContent = "Choose Size";
askSquaresBtn.addEventListener("click", handleAskSquaresBtnClick);
btnDiv.appendChild(askSquaresBtn);
addSquares(squareCnt, 500);
