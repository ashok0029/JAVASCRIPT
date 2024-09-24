var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER:", a);  
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ashok"
    function two(){
        const website = "google"
        // console.log(username);
        
    }
    // console.log(website);// this gives error 
    two()
}
one()

if(true){
  const username = "ashok"
  if(username === "ashok"){
    const website = "youtube"
    // console.log(username+website);
  } 
//   console.log(website); //gives error
}

// console.log(username); // gives error


// +++++++++ interesting ++++++++

console.log(addone(5));

function addone(num){
    return num+1
}

// console.log(addTwo(5)); // gives error because we hold the function in a variable 

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); // this works fine
