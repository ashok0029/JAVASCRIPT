// declaring singleton object using constructor
const appUser  = new Object()
appUser.id = "123abc"
appUser.name = "ashok"
appUser.isLoggedIn = false

console.log(appUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Ashok",
            lastname: "Bishnoi"
        }
    }
}
console.log(regularUser.fullname.userfullname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1,obj2} // normal method 

// using assign 

const obj5 = Object.assign(obj1, obj2, obj3) // if we doen't apply {} .all the values goes in obj1 as well. for example-->
console.log(obj5);
console.log(obj1);
// expected output
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//  But if the we apply then onj1 doesn't changes
const obj9 = Object.assign({},obj1, obj2, obj3)
console.log(obj9);
console.log(obj1);
// Expected Output 
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// { '1': 'a', '2': 'b' }

// using spread operator
const obj6 ={...obj1, ...obj2}
console.log(obj6);

// let suppose values are coming from databases in the form of array.
// array of objects.
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

console.log(users[1].email);
console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('isLoggedIn'));



// object destructuring
const course = {
    coursename: "Javascript",
    price: "9999",
    courseInstructor: "ashok"
}

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);


// api
// json format
// {
//     "name": "ashok",
//     "coursename": "Javasript",
//     "price": "free"

// }

// api in the form of array of objects 
// [
//     {},
//     {},
//     {}
// ]