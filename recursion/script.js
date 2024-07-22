const loop = document.querySelector('#loop-input');
const recursion = document.querySelector('#recursion-input');
const loopBtn = document.querySelector('#loop-btn');
const recursBtn = document.querySelector('#recur-btn');
const loopRes = document.querySelector('#loop-result');
const recursRes = document.querySelector('#recur-result');
function fib (number) {
    let fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    return fibonacci;
}

function fibsRec (number, fibRecArr = []) {
    if (number <= 1) {
        fibRecArr[number] = number;
        return fibRecArr;
    }
    else {
        if (fibRecArr[number] === undefined) {
            fibRecArr[number] = fibsRec(number - 1, fibRecArr)[number - 1] + fibsRec(number - 2, fibRecArr)[number-2];
        }
        return fibRecArr;
    }
}

loopBtn.addEventListener('click', () => {
    const number = parseInt(loop.value);
    loopRes.textContent = fib(number).toString();
});

recursBtn.addEventListener('click', () => {
    const number = parseInt(recursion.value);
    const fibRecArr = fibsRec(number);
    recursRes.textContent = fibRecArr.toString();
});