const displayBox = document.querySelector(".display-box");

const buttonsNum = document.querySelectorAll(".btn.num");
const buttonsOpr = document.querySelectorAll(".btn.opr");
const buttonsEtc = document.querySelectorAll(".btn.etc");

let operator = null;
let currentValue = null;
let inputStr = "";

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

function operate(inputValue) {
  let result;
  if (operator === "+") {
    result = add(currentValue, inputValue);
  } else if (operator === "-") {
    result = subtract(currentValue, inputValue);
  } else if (operator === "*") {
    result = multiply(currentValue, inputValue);
  } else if (operator === "/") {
    result = divide(currentValue, inputValue);
  }
  return result;
}

function display(value) {
  displayBox.textContent = value;
}

function initValues() {
  operator = null;
  currentValue = null;
  inputStr = "";
  display(inputStr);
}

buttonsNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 입력과 동시에 화면에 표시
    inputStr += btn.textContent;
    display(inputStr);
  });
});

buttonsOpr.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator !== null) {
      // 누적된 연산이 존재할 경우
      currentValue = operate(Number(inputStr)); // 기존 누적된 연산부터 해결
      display(currentValue);
      operator = btn.textContent;
      inputStr = "";
    } else {
      // 첫 연산일 경우
      // currentValue != Number(inputStr)이 아닌 이유: '='버튼 클릭 시 inputStr==''가 되므로 이어하기 불가
      currentValue = Number(displayBox.textContent);
      operator = btn.textContent;
      inputStr = "";
    }
  });
});

buttonsEtc.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "AC") {
      // All Clear: 모든 값 제거
      initValues();
    } else if (btn.textContent === "=") {
      // 연산 수행
      currentValue = operate(Number(inputStr));
      display(currentValue);
      operator = null;
      inputStr = "";
    }
  });
});
