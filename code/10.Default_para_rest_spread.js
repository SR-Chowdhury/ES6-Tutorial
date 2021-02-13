/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-10
* Default parameter, Rest & Spread Operator in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// - - - - - Default Parameter - - - - - - //

// Default Parameter: means you can intialize argument in ()

// Trditional Way
const sum1 = (a,b) => a + b;

console.log(sum1(1,2)); // 3

// Using Default Parameter
const sum2 = (a=1, b=1) => a + b;

console.log(sum2()); // 2
//  Here a = 1, b = 1

console.log(sum2(5)); // 6
//  Here a = 5, b = 1


// - - - - - Rest Operator or Ellipsis or ... - - - - - - //
// suppose we want to add several values but we don't know how much parameter we will get, then use Rest Operator

const add = (...val) => {
    console.log(val); // 2, 4, 6, 8, 10
    return val.reduce((a, b) => a + b);
};
let output1 = add(2, 4, 6, 8, 10);
console.log(`Output: ${output1}`); // Output: 30


// - - - - - Spread Operator or Ellipsis or ... - - - - - - //

const arr = [1, 2, 3, 4];

console.log(arr); // [1, 2, 3, 4]; It shows an array
console.log(...arr); // 1, 2, 3, 4
// but it shows individual variable; Spread operator break the array

// Suppose if you want to add a value into an array, then what we do, array.push, isn't it
// But it is not efficient way, we shoud use 'Spread' operator

const arr1 = [3, 5, 7, 9];
let arr1Output = [...arr1, 11, 13];
console.log(arr1Output);
// 3, 5, 7, 9, 11, 13; we made it

// Again, if we want to add a properties in an object the we must use 'Spread Operator'

const obj1 = {
    id: '1412',
    year: '2021'
}
const obj2 = {
    ...obj1,
    age: '30'
}
console.log(obj2);
// Fine, we copied obj1 into obj2 and even we can add properties
