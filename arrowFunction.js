// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greetArrow = (name) => (`Hello, ${name} !`);
// greetArrow("Abdullah");
// greetArrow("Khalid");
console.log(greetArrow("Abdullah"));


// Write a simple arrow function that takes two parameters and returns their sum.

const sumOfTwoValues = (firstNum, secondNum) => firstNum + secondNum
console.log(sumOfTwoValues(10,5));

// Write a simple arrow function that squares a number.

const squareAnNumber = (numSquare) => numSquare**2;
console.log(squareAnNumber(2));


// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
// normal function:
 const arrayOfNumbers1 = [1, 2, 3, 4, 5];
const squaredArray1 =arrayOfNumbers1.map(function(num){
    return num**2;
 })
 console.log(squaredArray1);
// ----------------------------------------------------------- the Solution -----------------------------------------------------------
// arrow function
const arrayOfNumbers = [1, 2, 3, 4, 5];
const squaredArray =arrayOfNumbers.map(num => num**2);
console.log(squaredArray);


// this is for refrence only please accept it as a commit for future refreance for me 
// https://www.warambil.com/javascript-arrays-and-arrow-functions
// LOOK up predicate function in google for more details
// const persons = [
//     { name: "John", age: 35 },
//     { name: "Anne", age: 24 },
//     { name: "Tom", age: 41 },
//     { name: "Andrew", age: 55 },
//     { name: "Mary", age: 18 },
//     ]
    
//     const overThirty = persons.filter(person => person.age > 30)
//     console.log(overThirty)


