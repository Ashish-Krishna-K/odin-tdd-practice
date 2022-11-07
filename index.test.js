import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index'

test('capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test ('capitalize only the first character in a multi-word string', () => {
    expect(capitalize('hello, world!')).toBe('Hello, world!');
});

test ('reverse a given string', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test ('reverses a multi-word string', () => {
    expect(reverseString('This should work')).toBe('krow dluohs sihT');
});

test ('must be an object', () => {
    expect(typeof calculator).toBe("object");
});

test ('must add two positive integers', () => {
    expect(calculator.add(3, 5)).toBe(8);
});

test ('must add two negative integers', () => {
    expect(calculator.add(-2, -10)).toBe(-12);
});

test ('must add a positive and a negaitve integers', () => {
    expect (calculator.add(-5, 20)).toBe(15);
});

test ('must subtract two positive integers', () => {
    expect(calculator.subtract(13, 1)).toBe(12);
});

test ('must multiply two integes', () => {
    expect (calculator.multiply(5, 25)).toBe(125);
});

test ('must divide two integers', () => {
    expect(calculator.divide(100, 2)).toBe(50);
});

test ('must return an integer', () => {
    expect (calculator.divide(13, 3)).toBe(4);
});

test ('must show an error if divided by 0', () => {
    expect(calculator.divide(5, 0)).toBe("You can't divide by 0!");
});

test ('shifts the characters by given places', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
});

test ('works with any number of places provided', () => {
    expect(caesarCipher('luxemborg', 13)).toBe('yhkrzobet');
});

test ('works with more than one word', () => {
    expect(caesarCipher('hello world', 5)).toBe('mjqqt btwqi');
});

test ('wraps from z to a', () => {
    expect(caesarCipher('zebra', 5)).toBe('ejgwf');
});

test ('works with uppercase letters', () => {
    expect(caesarCipher('LONDON', 5)).toBe('QTSITS');
});

test ('works with mixed case letters', () => {
    expect(caesarCipher('New York', 5)).toBe('Sjb Dtwp');
});

test ('ignores punctuations', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

const result = analyzeArray([1,8,3,4,2,6]);

test ('returns an object', () => {
    expect (typeof result).toBe('object');
});

test ('calculates the correct average', () => {
    expect (result.average).toBe(4);
});

test ('calculates the correct minimum', () => {
    expect (result.min).toBe(1);
});

test ('calculates the correct maximum', () => {
    expect (result.max).toBe(8);
});

test ('calculates the correct length', () => {
    expect (result.length).toBe(6);
});
