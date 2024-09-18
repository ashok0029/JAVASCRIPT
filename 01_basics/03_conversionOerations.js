let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true=> 1; false=> 0;
// "Ashok" => NaN

let isLoggedIn = 1;

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);

// 1 => true; 0=> false;
// "" => false
// "Ashok" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ********** Operations ***********

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = " Ashok"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+ 2 + 2);
console.log(1+ 2 + "2");

console.log(+true);
console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2+2 => ok but not the right way to write

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// To study more about the prefix and postfix operators use below link
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion





