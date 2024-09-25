// this --> The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.

const user = {
    username: "ashok",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  
        // console.log(this);
         
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "ashok"
//     console.log(this)
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "ashok"
//     console.log(this);
//     console.log(this.username);
// }
// chai()



// arrow fuction
const chai = () => {
    let username = "ashok"
    console.log(this);
    console.log(this.username);
}
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// implicit return
// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({username: "ashok"})
// console.log(addTwo(3,4));

