/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-03
* Let vs Const vs Var in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/


// - - - - - var - - - - - - //
// You can override 'var' from anywhere

var x = 10;
console.log("var x 10 : " + x);

if(true) {
    var x = 20;
    console.log("var x 20 : " + x);
}
console.log("var x : " + x);

x = 30;
console.log("var x 30 : " + x);


// - - - - - let - - - - - - //
// You can't override 'let' from anyblock or function or scope
let y = 10;
console.log("let y 10 : " + y);

if(true) {
    let y = 20;
    console.log("let y 20: " + y);
}
console.log("let y: " + y);

y = 30;
console.log("let y 30 : " + y);

// - - - - - const - - - - - - //

const z = 10;
console.log("const z: " + z);
if(true) {
    const z = 20;
    console.log("const z: " + z);
}
console.log("const z: " + z);

// z = 30; //Error: Assignment to constant variable
// You can't override any const variable because it is constant

const arr = [];
arr.push("SHIHAN");
arr.push("+");
arr.push("TANJIMA");

console.log(arr); // [SHIHAN, + , TANJIMA]

// - - - - - LET & VAR - - - - - - //

function print1() {
    {
        var a = 10;
        {
            const a = 15;
            console.log("print1 => const a: " + a);
        }
        a = 20;// This a will work because const a is an another scope or block
        console.log("print1 => override a: " + a);
    }
    console.log("print1 => Outer a : " + a); // Outer a: 20 it is working but if it was let a = 10
}
print1();

function print2() {
    {
        let a = 10;
        {
            const a = 15;
            console.log("print2 => const a: " + a);
        }
        a = 20;// This a will work because const a is an another scope or block
        console.log("print2 => override a: " + a);
    }
    console.log("print2 => Outer a : " + a); //Error: Uncaught ReferenceError: a is not defined 
    // Though Quokka.js shows result but it is wrong.
}
print2();