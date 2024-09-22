// Time differance calculator
let myDate = Date.now()
console.log(myDate);
let givenDate = new Date("09-21-2024")
givenDate = givenDate.getTime()
console.log(givenDate);

let time = Math.floor((myDate-givenDate)/1000)
console.log(time);

let hours = Math.floor(time/(60*60))
let mintues = Math.floor(((time)-(hours*60*60))/60)
let seconds = Math.floor(((time)-(hours*60*60))-mintues*60)

console.log(`time in hours ${hours} hr and in min ${mintues} min and in sec ${seconds} sec`);