
function capitalize(str) {
    const changed = str[0].toUpperCase() + str.slice(1);
    return changed;
}

function reverseString(str) {
    const reversed = str.split('').reverse().join('');
    return reversed;
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    },
}

// shift >= 0
function caesarCipher(str, shift) {
    let output = '';
    if(shift < 0) {
        throw new Error('please input positive number');
    }
    // 97 ~ 122
    for(let i = 0; i < str.length; i++) {
        let temp = str[i].charCodeAt();
        if ((temp >= 65 && temp <=90) || (temp >= 97 && temp <= 122)) {
            temp = str[i].charCodeAt() + shift;
            if (temp > 122) {
                temp = temp - 122 + 97 - 1;
            }
            else if (temp > 90 && temp < 97) {
                temp = temp - 90 + 65 - 1;
            }
            output += String.fromCharCode(temp);
        } else {
            output += str[i];
        }
    }
    return output;
}

function analyzeArray (arr) {
    const average = arr.reduce((a, c) => a + c) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {
        average,
        min,
        max,
        length,
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
}