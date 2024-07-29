const { capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray } = require('./script');

test("capitalize first letter", () => {
    expect(capitalize('abc')).toBe('Abc');
})

test ("revers string", () => {
    expect(reverseString('abc')).toBe('cba');
})

test("calculator add", () => {
    expect(calculator.add(5, 3)).toBe(8);
})

test("calculator subtract", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test("calculator multiply", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})

test("calculator divide", () => {
    expect(calculator.divide(10, 5)).toBe(2);
})

test("calculator divide to 0", () => {
    expect(() => calculator.divide(10, 0)).toThrow(Error('Cannot divide by zero'));
})

test("caesar cipher", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test("caesar cipher", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("caesar cipher", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test("analyzeArray", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})