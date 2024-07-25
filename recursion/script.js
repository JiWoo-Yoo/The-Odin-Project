const loop = document.querySelector('#loop-input');
const loopBtn = document.querySelector('#loop-btn');
const loopRes = document.querySelector('#loop-result');

const recursion = document.querySelector('#recursion-input');
const recursBtn = document.querySelector('#recur-btn');
const recursRes = document.querySelector('#recur-result');

const mergeInput = document.querySelector("#merge-input");
const mergeBtn = document.querySelector("#merge-btn");
const mergeRes = document.querySelector("#merge-result");

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


function merge(left, right) {
    const sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr,...left,...right];
}

// mergeSort : O(NlogN), recursive
function mergeSort(array) {
    if (array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    // slice: 원본 배열에 변화 없음
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

loopBtn.addEventListener('click', () => {
    const number = parseInt(loop.value);
    loopRes.textContent = fib(number).toString();
});

recursBtn.addEventListener('click', () => {
    const number = parseInt(recursion.value);
    const fibRecArr = fibsRec(number-1);
    recursRes.textContent = fibRecArr.toString();
});

mergeBtn.addEventListener('click', () => {
    const arr = JSON.parse(mergeInput.value);
    const newArr = mergeSort(arr);
    mergeRes.textContent = newArr.toString();
});