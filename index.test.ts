// all tests are self-documenting hence skipping comments in this file.
import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from './index';

describe("capitalize the provided string(capitalize means to change the first letter of the string to uppercase)", () => {
  test("capitalize a word with all lowercase letters", () => {
    expect(capitalize('ashish')).toMatch(/Ashish/);
  });
  test("capitalize a word with all uppercase letters", () => {
    expect(capitalize('ASHISH')).toMatch(/Ashish/);
  });
  test("capitalize a word with mixed cases", () => {
    expect(capitalize('aShIsH')).toMatch(/Ashish/);
  })
});


describe("reverse the provided string", () => {
  test("reverses the string", () => {
    expect(reverseString('ashish')).toMatch(/hsihsa/);
  });
  test("does nothing to a palindrome string", () => {
    expect(reverseString('lol')).toMatch(/lol/);
  });
});

describe("calculator object testing", () => {
  const calculator = new Calculator;

  test("returned class has the add, subtract, multiply, divide methods", () => {
    expect(calculator).toHaveProperty('add');
    expect(calculator).toHaveProperty('subtract');
    expect(calculator).toHaveProperty('multiply');
    expect(calculator).toHaveProperty('divide');
  })

  test("adds the given numbers correctly", () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });
  test("adds floating point numbers correctly", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test("subtracts the given numbers correctly", () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
  });
  test("multiplies the given numbers correctly", () => {
    expect(calculator.multiply(2, 3)).toEqual(6);
  });
  test("divides the given numbers correctly", () => {
    expect(calculator.divide(6, 3)).toEqual(2);
  });
  test("throws if attempting to divide by 0", () => {
    expect(() => {
      calculator.divide(5, 0);
    }).toThrowError("Cannot divide by 0!");
  });
});

describe("ceaser cipher works as expected", () => {
  test("cipher works by shifting by 3", () => {
    expect(caesarCipher("ashish", 3)).toMatch(/dvklvk/);
  });
  test("cipher retains case of input string", () => {
    expect(caesarCipher("Ashish", 3)).toMatch(/Dvklvk/);
  });
  test("cipher wraps around z", () => {
    expect(caesarCipher("ZooLander", 5)).toMatch(/EttQfsijw/);
  });
  test("cipher ignores punctuations", () => {
    expect(caesarCipher("Doesn't touch punctuations!", 2)).toMatch(/Fqgup'v vqwej rwpevwcvkqpu!/);
  });
})

describe("testing analyzeArray", () => {
  const about = analyzeArray([1,8,3,4,2,6]);

  // expect(about).toBeInstanceOf();
  test("returned object has the average, min, max, length properties", () => {
    expect(about).toHaveProperty('average');
    expect(about).toHaveProperty('min');
    expect(about).toHaveProperty('max');
    expect(about).toHaveProperty('length');
  });
  test("average is correctly calculated to 4", () => {
    expect(about.average).toBe(4);
  });
  test("min is correctly identified to be 1", () => {
    expect(about.min).toBe(1);
  });
  test("max is correctly identified to be 8", () => {
    expect(about.max).toBe(8);
  });
  test("correct length of 6 is returned", () => {
    expect(about.length).toBe(6);
  });
})
