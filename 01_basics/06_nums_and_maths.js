const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber);
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++ MATHS ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.7));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.9));
console.log(Math.min(4,3,8,5));
console.log(Math.max(4,3,8,5));

console.log(Math.random());
// math.random gives you values between 0 to 1 like 0.1354 or 0.0433 etc.
// so we multiply this number by 10 and add to 1 and add +1 into it.
// and at last we floor this number so that we get a integer number between 1 to 10.
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);

