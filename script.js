// #1: Print in Console numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// #2: Print in Console the odd numbers less than 100
for (let i = 1; i <= 100; i += 2) {
  // console.log(i);
}

// #3: Print in Console the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  // console.log(`7 x ${i} = ${i * 7}`);
}

// #4: Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum);
// #5: Calculate 10!
let fabCalculate = 1;
for (let i = 1; i <= 10; i++) {
  fabCalculate *= i;
}
// console.log(fabCalculate);

// #6: Calculate the sum of odd numbers greater than 10 and less than 30
let sumOdd = 0;
for (let i = 10; i <= 30; i += 2) {
  sumOdd += i;
}
// console.log(sumOdd);

// #7: Calculate the sum of numbers in an array of numbers
let arr = [50, 67, 20, 84, 91, 40, 69];
let arrTotal = 0;
for (let i = 0; i < arr.length; i++) {
  arrTotal += arr[i];
}
// console.log(arrTotal);

// #8: Calculate the average of the numbers in an array of numbers
const arrAverage = (arr) => {
  let arrTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }
  return arrTotal / arr.length;
};
// console.log(arrAverage(arr));

// #9: Find the maximum number in an array of numbers
const findMaxNumber = (arr) => Math.max(...arr);

// console.log(findMaxNumber(arr));

// #10: Create a function that receives an array of numbers and returns an array containing only the positive numbers
const getPositiveNumber = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
// console.log(getPositiveNumber(arr));
// #11: Print in Console all the multiplication tables with numbers from 1 to 10

const printMultiplicationTable = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      // console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};
printMultiplicationTable(5);

// #12: Create a function that will convert from Celsius to Fahrenheit
const celsiustoFahrenheit = (n) => n * 1.8 + 32;
// console.log(celsiustoFahrenheit(50));

// #13: Create a function that will convert from Fahrenheit to Celsius

const fahrenheittoCelsius = (n) => ((n - 32) * 5) / 9;
// console.log(fahrenheittoCelsius(50));

// #14: Print in Console the first 10 Fibonacci numbers without recursion
var f0 = 0;
// console.log(f0);
var f1 = 1;
// console.log(f1);

for (var i = 2; i < 10; i++) {
  var fi = f1 + f0;
  // console.log(fi);

  f0 = f1;
  f1 = fi;
}

// #15: Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(20);
// console.log(n);

// #16: Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return num < 1;
    }
  return num > 1;
}
// console.log(isPrime(6));

// Check Leap Year Using if...else
function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return year > 1;
  } else {
    return year < 1;
  }
}
console.log(checkLeapYear(2025));

const obj = {
  color: "red",
};
