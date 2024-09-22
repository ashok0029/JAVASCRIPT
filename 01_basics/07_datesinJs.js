// // Dates
// // let myDate = new Date()
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof(myDate));

// // date format
// // let myCreatedDate = new Date(2023, 0, 23)
// // console.log(myCreatedDate.toDateString());

// // date and time format
// // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // console.log(myCreatedDate.toLocaleString());

// // YY-MM-DD format
// // let myCreatedDate = new Date("2024-01-15")
// // console.log(myCreatedDate.toLocaleString());

// // mm-dd-yy format
// // let myCreatedDate = new Date("01-15-2024")
// // console.log(myCreatedDate.toLocaleString());

// // for time
// // let myTimeStamp = Date.now()
// // console.log(myTimeStamp);

// // for comaring time
// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("09-21-2024")
// let myDate = new Date()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// myDate = console.log(myDate.toLocaleString('en-IN',{timeZone:'Asia/Kolkata',hours12:true}));
// myCreatedDate = console.log(myCreatedDate.toLocaleString());

function timeDifference(givenTime) {
    let now = new Date();
    let givenDate = new Date("09-21-2024");

    // Calculate the difference in milliseconds
    let diff = now - givenDate;

    // Convert the difference to hours, minutes, and seconds
    let totalSeconds = Math.floor(diff / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
}

// Example usage:
let givenTime = "2024-09-21T12:00:00"; // Use ISO format for the date
let result = timeDifference(givenTime);
console.log(`Total time from given time to now: ${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds.`);





