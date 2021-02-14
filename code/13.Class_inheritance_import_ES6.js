/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-13 (part two)
* Class & Inheritance in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

import Employee from './13.Class_inheritance_export_ES6';

class User extends Employee{
    
    constructor(name, id, city) {
        super(name, id);
        this.city = city;
    }
    print2() {
        super.print();
        console.log(`City: ${this.city}`);
    }
}

let obj = new User('SHIHAN', 1412, 'Sylhet');
obj.print2();