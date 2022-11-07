export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
};

export function reverseString(string) {
    return string.split('').reverse().join('');
};

export const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (a === 0 || b === 0) return "You can't divide by 0!";

        return Math.round(a / b);
    }
};

const regex = /[.,\/#!$%\^&\*;:{}=\-_`~() ]/g

export function caesarCipher(string, places) {

    let arr = string.split('');
    
    const newArr = arr.map(letter => {
        if (letter.match(regex)) {
            return letter;
        };
        
        if (letter === letter.toUpperCase()) {
            return shiftCharsUpper(letter, places);
        } else {
            return shiftCharsLower(letter, places);
        }
    });

    return newArr.join('');

}

function shiftCharsLower(char, places) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let currentInd = alphabets.indexOf(char);

    let newInd = ((currentInd + places) % 26);

    return alphabets[newInd];

}

function shiftCharsUpper(char, places) {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let currentInd = alphabets.indexOf(char);

    let newInd = ((currentInd + places) % 26);

    return alphabets[newInd];
    
};


export function analyzeArray(array) {
    const length = array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const sum = array.reduce((a, b) => a + b, 0);
    const average = Math.round(sum / length);
    return {
        average,
        min,
        max,
        length
    }
}
