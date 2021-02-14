/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-12 (part one)
* Class with module system in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/

// Here we will learn default module system and class in ES6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        // Name: SHIHAN, Age: 29
    }
}

export default Person;
// here we set default export that means it will export only Person Class