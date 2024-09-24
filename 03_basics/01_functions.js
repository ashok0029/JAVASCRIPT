function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("K");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3


function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(3,5)
// console.log("Result: ",result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ashok"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}  //... rest operator
// console.log(calculateCartPrice(200,400,500));

const user = {
    username: "ashok",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,500]));
