//   arrays

//  Declare an array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shakiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[2]);
console.log(myHeros[1]);
console.log(myArr2[2]);


// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) // it adds the given value at the starting of the array
myArr.shift() // same like pop but from index 0.

console.log(myArr.includes(9)); // true--if value exits and false--if vaue doesn't exits in array
console.log(myArr.indexOf(3)); // if the given value doesn't exits in array it returns -1.


const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);
console.log(typeof(newArr));

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

// The main difference is that slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it.
// Slice returns array elements from the "start" up until just before the "end" specifiers. Splice mutates the actual array, and starts at the "start" and keeps the number of elements specified.




