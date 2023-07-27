// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseStr = str => {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString)
}
// reverseString("hello world")

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const positiveNums = arr => {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i]
        }
    }
    console.log(sum)
}
//positiveNums([2, -5, 10, -3, 7])


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const frequentElement = arr => {
    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    console.log(mostFrequentElement);
}
// frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersWithSum = (arr, target) => {
    let numberPair = null;
    arr.forEach((num1, index1) => {
        if (!numberPair) {
            arr.forEach((num2, index2) => {
                if (index1 !== index2) {
                    if ((num1 + num2) === target) {
                        numberPair = [index1, index2];
                    };
                }
            })
        } else return;
    })
    return numberPair;
}
// findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9)

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
    if (operator === "+") {
        console.log(num1 + num2);
    }
    if (operator === "-") {
        console.log(num1 - num2);
    }
    if (operator === "*") {
        console.log(num1 * num2);
    }
    if (operator === "/") {
        console.log(num1 / num2);
    }
}
// calculator(40,2, '/')

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    console.log(password);
}
// generateRandomPassword(12);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanStr) => {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < romanStr.length; i++) {
        const currentSymbol = romanStr[i];
        const currentIntValue = romanNumerals[currentSymbol];
        const nextSymbol = romanStr[i + 1];
        const nextIntValue = romanNumerals[nextSymbol];

        if (nextIntValue > currentIntValue) {
            result += (nextIntValue - currentIntValue)
            i++
        }
        else result += currentIntValue;
    }

    console.log(result);
}
// romanToInt("X");

//  Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const find2ndSmallest = (arr) => {
    if (!Array.isArray(arr)) return;
    const numberArray = [];
    arr.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) numberArray.push(parseFloat(item));
    })
    numberArray.sort((a, b) => a - b);
    console.log(numberArray)
    return numberArray[1];
}
// console.log(find2ndSmallest([3, 5, 2, 5, 3, 3, 1, 4, 5, 5]))