## JavaScript Problem Solving

**#1: Print in Console from 1 to 10 numbers?**

```

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

```

**#2: Print in Console the odd numbers less than 100?**

```

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

```

**#3: Print in Console the multiplication table with 7?**

```

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${i * 7}`);
}

```

**#4: Calculate the sum of numbers from 1 to 10?**

```

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

```

**#5: Calculate 10!?**

```

let fabCalculate = 1;
for (let i = 1; i <= 10; i++) {
  fabCalculate *= i;
}
console.log(fabCalculate);

```

**#6: Calculate the sum of odd numbers greater than 10 and less than 30?**

```

let sumOdd = 0;
for (let i = 10; i <= 30; i += 2) {
  sumOdd += i;
}
console.log(sumOdd);

```

**#7: Calculate the sum of numbers in an array of numbers?**

```

let arr = [50, 67, 20, 84, 91, 40, 69];
let arrTotal = 0;
for (let i = 0; i < arr.length; i++) {
  arrTotal += arr[i];
}
console.log(arrTotal);

```

**#8: Calculate the average of the numbers in an array of numbers?**

```

const arrAverage = (arr) => {
  let arrTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }
  return arrTotal / arr.length;
};
console.log(arrAverage(arr));

```

**#9: Find the maximum number in an array of numbers?**

```

const findMaxNumber = (arr) => Math.max(...arr);

console.log(findMaxNumber(arr));

```

**#10: Create a function that receives an array of numbers and returns an array containing only the positive numbers?**

```

const getPositiveNumber = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(getPositiveNumber(arr));

```

**#11: Print in Console all the multiplication tables with numbers from 1 to 10?**

```

const printMultiplicationTable = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};
printMultiplicationTable(10);

```

**#12: Create a function that will convert from Celsius to Fahrenheit?**

```

const celsiustoFahrenheit = (n) => n * 1.8 + 32;
console.log(celsiustoFahrenheit(50));

```

**#13: Create a function that will convert from Fahrenheit to Celsius?**

```

const fahrenheittoCelsius = (n) => ((n - 32) * 5) / 9;
console.log(fahrenheittoCelsius(50));

```

**#14: Create a function that will find the nth Fibonacci number using recursion?**

```

function findFibonacci(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}
console.log(findFibonacci(20));

```

**#15: Create a function that will return a Boolean specifying if a number is prime?**

```

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return num < 1;
    }
  return num > 1;
}
console.log(isPrime(6));

```

**#16: Check Leap Year Using if...else?**

```

function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return year > 1;
  } else {
    return year < 1;
  }
}
console.log(checkLeapYear(2025));

```

**#17: Create a function that accepts an array and returns the last item in the array?**

```

const arr = [50, 90, 80, 66, 85];
const returnLastItem = (arr) => arr[arr.length - 1];
console.log(returnLastItem(arr));

```

**#18: Calculate the sum of digits of a positive integer number?**

```

const sumOfDigits = (n) => {
  const newArr = Array.from(String(n), Number);
  let sumOfArr = 0;
  for (let i = 0; i < newArr.length; i++) {
    sumOfArr += newArr[i];
  }
  return sumOfArr;
};
console.log(sumOfDigits(45465));

```

**#19: Print in Console the first 50 prime numbers**

```

getPrime(50);
function getPrime(nPrime) {
  let prime = 1;
  for (let i = 2; prime <= nPrime; i++) {
    if (isPrime(i)) {
      console.log(prime, " ", i);
      prime++;
    }
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return num < 1;
    }
  return num > 1;
}

```

**#20: Check Odd or Even Number with Arguments Objects**

```

function checkOddOrEven() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i] % 2 == 0
      ? console.log(arguments[i] + " is Even Number")
      : console.log(arguments[i] + " is Odd Number");
  }
}
checkOddOrEven(11, 10, 20);

```

**#21: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt**

```

console.log(getFirstNprimeNumber(5, 500));
function getFirstNprimeNumber(nPrimes, startAt) {
  const arr = [];
  for (let i = startAt; arr.length < nPrimes; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return num < 1;
    }
  return num > 1;
}

```

**#22: Rotate an array to the left 1 position**

```

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

rotateLeft(arr);
function rotateLeft(arr) {
  const arrFirstElement = arr.shift();
  arr.push(arrFirstElement);
}
console.log(arr);

```

**#23: Reverse an array with createed function, don`t Change orginal array**

```

const arr = [1, 2, 3];

const newArr = reverseArr(arr);
console.log(newArr);

function reverseArr(arr) {
const newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
newArr.push(arr[i]);
}
return newArr;
}


```

**#24: Reverse an array with JavaScript Builtin Method**

```

const arr = [1, 2, 3];
arr.reverse();
console.log(arr);

```

**#25: Reverse a string with createed function, don`t Change orginal string**

```

const str = "Md Nazmul Islam";

const newStr = reverseString(str);
console.log(newStr);

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

```

**#26: Reverse a string with JavaScript Builtin Method**

```

const str = "Md Nazmul islam";
const newStr = str.split("").reverse().join("");
console.log(newStr);

```

**// #27: Create a function that takes an array and returns the types of values (data types) in a new array.**

```

const arrayValuesTypes = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(typeof arr[i]);
  }
  return newArr;
};
console.log(arrayValuesTypes([1, 2, "Nazmul", [], true]));

```

**// Or ShortCut**

```

const arrayValuesTypes = (arr) => arr.map((x) => typeof x);
console.log(arrayValuesTypes([1, 2, "Nazmul", [], true]));

```
