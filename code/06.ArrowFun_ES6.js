/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-06
* Arrow Function in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// - - - ES5 mehtod - - - 
function p1() {
    console.log("hello, ES5");
}
p1();

// ________ES6 mehtod_________ //
const x1 = () => {
    console.log("hello, ES6");
}
x1();

// - - - ES5 mehtod - - - 
function p2(args) {
    console.log("From P2: " + args);
}
p2('ES5');

// ________ES6 mehtod_________//
const x2 = (args) => {
    console.log("From X2: " + args);
}
x2('ES6');
// OR
const x3 = args => console.log("From X3: " + args);
x3('ES6');

// - - - ES5 mehtod - - - 
function sqr(a) {
    return a * a;
}
console.log(sqr(3));

// ________ES6 mehtod_________//
const sqrFun = a => a*a;
console.log(sqrFun(4));