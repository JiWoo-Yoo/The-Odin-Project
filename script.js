const displayBox = document.querySelector(".display-box");

const buttonsNum = document.querySelectorAll(".btn.num");
const buttonsOpr = document.querySelectorAll(".btn.opr");
const buttonsEtc = document.querySelectorAll(".btn.etc");

let operator;
let currentValue;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {}

function display(value) {
  displayBox.textContent = value;
}

function initValues() {
  currentValue = null;
  operator = null;
  displayBox.textContent = "";
}

buttonsNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayBox.textContent += btn.textContent;
  });
});

buttonsOpr.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
  });
});

buttonsEtc.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "AC") {
      initValues();
    } else if (btn.textContent === "=") {
      operate();
      display(currentValue);
    }
  });
});
