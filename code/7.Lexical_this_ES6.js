/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-07
* Lexical 'this' | Problem solved of 'this' keyword in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/


// - - - ES5 mehtod - - - 
var obj1 = {
    nam: "SHIHAN",
    print: function() {
        console.log("1st this: " + this); // Object 
        console.log("1st this.name: " + this.nam); // SHIHAN
        setTimeout(function() {
            console.log("2nd this: " + this); // Window Object
            console.log("2nd this.name: " + this.nam); // Undefined
        },1000 );
    }
}
obj1.print();

var obj2 = {
    gender: "male",
    print: function() {
        console.log("Obj2 1st this: " + this); // Object 
        console.log("Obj2 1st this.gender " + this.gender); // male
        
        setTimeout(function() {
            console.log("Obj2 2nd this: " + this); // Window Object
            console.log("Obj2 2nd this.gender: " + this.gender); // male
        }.bind(this),2000 );
    }
}
obj2.print();

// ________ES6 mehtod_________ //
const obj = {
    email: 'shihan3star',
    print: function() {
        console.log("const 1st this: " + this); // Object
        console.log("const 1st this.name: " + this.email); // shihan3star

        setTimeout(() => {
            console.log("const 2nd this: " + this); // Object
            console.log("const 2nd this.name: " + this.email); // shihan3star           
        }, 5000);
    }
}
obj.print();