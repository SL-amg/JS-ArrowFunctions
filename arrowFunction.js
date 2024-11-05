// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greetArrow = (name) => `Hello, ${name} !`;
console.log(greetArrow("Abdullah"));


// Write a simple arrow function that takes two parameters and returns their sum.
const sumOfTwoValues = (firstNum, secondNum) => firstNum + secondNum
console.log(sumOfTwoValues(10,5));

// Write a simple arrow function that squares a number.
const square = (numSquare) => numSquare**2;
console.log(square(5));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const arrayOfNumbers = [1, 2, 3, 4, 5];
const squaredArray =arrayOfNumbers.map(num => num**2);
console.log(squaredArray);