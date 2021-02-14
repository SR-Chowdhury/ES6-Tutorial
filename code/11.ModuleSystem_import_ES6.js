/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-11 (part two)
* Module System in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// Module system means inherit data (ex. function, variable etc) from another file

// Here we improt data from 11.ModuelSystem_export_ES6 file

// Method 1: here we are getting all export data from 11.ModuleSystem_import_ES6.js
import * as data from './11.ModuleSystem_export_ES6';

let x = data.add(5,10);
console.log(x); //15

// Method 2: here we are getting data as we declared
import { sub, div } from './11.ModuleSystem_export_ES6';

console.log(sub(10,5)); // 5
console.log(div(10,5)); // 2