// Stack(primitive)    Heap(Non-Primitive)


// Stack Example -- only copy is provided, no change in the original variable
let myName = "Ashok Bishnoi"

let anotherName = myName
anotherName = "Hello Ashok"

console.log(myName);
console.log(anotherName);

// Heap Example -- referance of the original variable is provided, if changed then variable also get changed.

let userOne = {
    email: "ashok@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);


