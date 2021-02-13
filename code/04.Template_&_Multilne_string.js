/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-04
* Template and Multiline String in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

const nam = "Shihan"
const age = 29
const phone = +8801719896982

// ; is not mendatory in ES6

const output1 = "Name: " + nam + "; Age: " + age + "; Phone: " + phone;
console.log(output1);

const output2 = `Name: ${nam}; Age: ${age}; Phone ${phone})`;
const output3 = `Name: ${nam}; 
Age: ${age}; 
Phone ${phone})`;
console.log(output2);
console.log(output3);

// `` this is called backtick and in this scope whatever you write it will show as you want