/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-08
* Enhance Object in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// - - - ES5 mehtod - - - 
let nam = "SHIHAN";
let age = 29;

const userObj = {
    nam: nam,
    age: age,
    print: function() {
        console.log(this.nam + ', ' + this.age);
    }
}
userObj.print();

// ________ES6 mehtod_________ //
let nam2 = "TANJIMA";
let age2 = 24;

const userObj2 = {
    nam2,
    age2,
    print() {
        console.log(this.nam2 + ', ' + this.age2);
    }
}
userObj2.print();
