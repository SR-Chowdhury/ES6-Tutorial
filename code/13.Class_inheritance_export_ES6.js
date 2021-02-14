/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-13 (part one)
* Class & Inheritance in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

class Employee {
    
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    print() {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
    
}

export default Employee;