// Basic Comparision
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// First data types are chaged and then compared
console.log("2">1);
console.log("02">1);

// null will be estimated to a value like 0 and then compared. not ideal for comparing. because sometimes it converts into NaN.
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// it comes always false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//  === strict check => this doesnot change the data type

console.log("2"===2);
