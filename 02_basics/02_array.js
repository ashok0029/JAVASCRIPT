const marvel_heros = ["thor","ironmen","spiderman"]
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros) 
// array takes any value as an input like string, array, boolean, object etc..
// like in this case array take another array as input and make it an another element in the array.

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// spread operator --> mostly used .
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(anotherArray);


const real_another_array = anotherArray.flat(Infinity)
// flat --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);


console.log(Array.isArray("Ashok"));
console.log(Array.from("Ashok"));
// from --> Creates an array from an iterable object.
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

console.log(Array.from({name: "Ashok"})); 

let score1 = 100
let score2 = 200
let score3 = 300
const arr = Array.from([score1,score2,score3])
console.log(arr);



console.log(Array.of(score1 , score2, score3));
// of --> Returns a new array from a set of elements.
console.log(Array.from("hello"));



let years = [1,3,4,56]
console.log(years["2"] !== years["02"]); // true 
// The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit toString conversion. As a result, '2' and '02' would refer to two different slots on the years object

//It's also possible to quote the array indices (e.g., years['2'] instead of years[2]), although usually not necessary.
console.log(years[2]); // 4
console.log(years[02]); // 4
console.log(years["2"]); // 4
console.log(years["02"]); // undefined



