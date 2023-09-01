interface ReturnObjectType {
  average: number;
  min: number;
  max: number;
  length: number;
}

// a function to capitalize the given string, capitalize means the first letter of the
// word is in uppercase while the rest of the word is lowercase
export function capitalize(input: string): string {
  // Using the String.slice() we take the first element and change it uppercase and 
  // then change remaining characters into lowercase
  return input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
}

// a function to reverse the given string
export function reverseString(input: string): string {
  // we will first convert the given string into an array by calling the String.split()
  // method then we'll call the Array.reverse() method on the returned array and finally
  // we'll call the Array.join() method to return the string.
  return input.split('').reverse().join('');
}

// a calculator class to add, subtract, multiply and divide given numbers
export class Calculator {
  add(a: number, b: number) {
    return a + b;
  }
  subtract(a: number, b: number) {
    return a - b;
  }
  multiply(a: number, b: number) {
    return a * b;
  }
  divide(a: number, b: number) {
    // attempting to divide by 0 should throw an error
    if (a === 0 || b === 0) throw new Error("Cannot divide by 0!");
    return a / b;
  }
}

// ceaserCipher is a string where each character is "shifted" by set 
// factor 
export function caesarCipher(input: string, shiftFactor: number): string {
  // helper arrays for both lowercase and uppercase alphabets used to shift
  // the characters in the given string.
  const lowerCaseHelper = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCaseHelper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // first split the input string into an array using String.split()
  // then we'll use the Array.map() function to modify each character
  // of the returned array and finally we'll join the modified array 
  // into a string using the Array.join() method
  return input.split('').map(char => {
    // using regex to check if each individual character is uppercase
    // or lowercase, this way we can additonally also ignore spaces, 
    // punctuations and numbers
    if (/[a-z]/g.test(char)) {
      const ind = lowerCaseHelper.findIndex(x => x === char);
      return lowerCaseHelper[(ind + shiftFactor) % 26];
    }
    if (/[A-Z]/g.test(char)) {
      const ind = upperCaseHelper.findIndex(x => x === char);
      return upperCaseHelper[(ind + shiftFactor) % 26];
    }
    return char;
  }).join('');
}

// a function to find the average, min, max and length of the array of numbers
// provided
export function analyzeArray(input: number[]): ReturnObjectType {
  return {
    // using Array.reduce() method to find the sum of all numbers
    // and then dividing it with the array length to get the 
    // average
    average: input.reduce((a, b) => a + b, 0) / input.length,
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length
  }
}