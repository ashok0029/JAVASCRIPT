// Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

// // date format
let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString());

// // date and time format
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

// // YY-MM-DD format
let myCreatedDate3 = new Date("2024-01-15")
console.log(myCreatedDate3.toLocaleString());

// // mm-dd-yy format
let myCreatedDate4 = new Date("01-15-2024")
console.log(myCreatedDate4.toLocaleString());

// // for time
let myTimeStamp = Date.now()
console.log(myTimeStamp);

// // for comaring time
let myTimeStamp1 = Date.now()
let myCreatedDate = new Date("09-21-2024")
let myDate1 = new Date()
console.log(myTimeStamp1);
console.log(myCreatedDate.getTime());
myDate1 = console.log(myDate1.toLocaleString('en-IN',{timeZone:'Asia/Kolkata',hours12:true}));
myCreatedDate = console.log(myCreatedDate.toLocaleString());


// Time differance calculator
let myDate3 = Date.now()
console.log(myDate3);
let givenDate = new Date("09-21-2024")
givenDate = givenDate.getTime()
console.log(givenDate);

let time = Math.floor((myDate3-givenDate)/1000)
console.log(time);

let hours = Math.floor(time/(60*60))
let mintues = Math.floor(((time)-(hours*60*60))/60)
let seconds = Math.floor(((time)-(hours*60*60))-mintues*60)

console.log(`time in hours ${hours} hr and in min ${mintues} min and in sec ${seconds} sec`);



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{
    timeZone:"Asia/Kolkata"  
  }));


