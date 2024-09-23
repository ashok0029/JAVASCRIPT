// singleton 

// Object Literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Ashok",
    "full name": "Ashok Bishnoi",
    [mySym]: "myKey1",
    age: 20,
    location: "India",
    email: "ashok@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "ashok@google.com"
// Object.freeze(JsUser)
JsUser.email = "ashok@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




