// const string = "Ashok Bishnoi"
// console.log(string);

// normal method 
// const name = "Ashok Bishnoi"
// const age = 20
// console.log(name+age);



// String interpolation --> ` `
// Another option of string concatenation, is string interpolation, which substitutes values of variables into placeholders in a string. Note that you do not have to worry about spaces, like with concatenation
// String interpolation provides a more readable, convenient syntax to format strings.

// const name = "Ashok Bishnoi"
// const age = 20
// console.log(`my name is ${name} and my  age is ${age} years`);



// another way to declare a string is 

// const gameName = new String("ashokbishnoi")
// // different methods/fuctions of string
// console.log(gameName.length);
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('b'));

// more methods like substring, slice and many more you can read throw documentation.

const newGame = new String('ashokbishnoi')
console.log(newGame);
const newString = newGame.substring(0,5)
console.log(newString);
const anotherString = newGame.slice(-13,7)
console.log(anotherString);

const newStringOne = "   hello   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ashoka.com/ashok%20bishnoi"

console.log(url.replace('%20','-'));



const anotherNewString = newGame.split('-',3)
console.log(anotherNewString);
console.log(anotherNewString.length);

// more content regarding string --> string method mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String