/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-09
* Destructuring Array in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// Here we can stored a variable from an array; this is called Destructuring
const arr = [2,4,6,8];

let [a,b,c,d] = arr;
let [e, , ,h] = arr;
console.log(a, h); // 2 8

// Even we can store variable from an object

const obj = {
    name: "SHIHAN",
    email: "shihan3star@gmail.com"
}
let {name, email} = obj;
console.log(`Name: ${name}, Email: ${email}`);

const print = (name, email) => {
    console.log(`Name: ${name} & Email: ${email}`);
}
print(name, email);

// Even we can pass argument differently in the parameter

// const print2 = ({name: name, email: email}) => { or
const print2 = ({username, mail}) => {
    console.log(`Hello: ${username},
    Your Email: ${mail}`);
}
// print2({email: email, name: name});
print2({mail: email, username: name});