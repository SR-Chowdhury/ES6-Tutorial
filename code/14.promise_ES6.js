/**************************
* Bismillahir Rahmanir Rahim
* ES6 T-14
* Promise in ES6 
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 
**************************/


// Promise is added in ES6 for using Async task smothly

// _ _ So first we should know what is Async task: _ _

console.log("I am number One"); // 1st

setTimeout(() => {
    console.log("I am number two"); // 4th
}, 2000);

console.log("I am number Three"); // 2nd

setTimeout(() => {
    console.log("I am number Four"); // 3rd
}, 1000);

// Output: I am number One -> Three -> Four -> Two
// This is call Async task 

// Promise is used to handle Async task clean & smothly. Here we go.

let p1 = new Promise((resolve, reject) => {
    
    let x = "SuperStar World";
    setTimeout(() => {
        resolve(x);        
    }, 5000);
    
});

let p2 = new Promise((resolve, reject) => {
    
    let x = "Explore ";
    setTimeout(() => {
        resolve(x);        
    }, 3000);
    
});
// console.log(p1); // SuperStar World
// console.log(p2); // Explore

// Frist will show p2, than after 3seconds p1

p1.then((resolve_parameter) => { console.log(resolve_parameter); });
p1.catch((reject_err) => { console.log(reject_err); });

p2.then((resolve_parameter) => { console.log(resolve_parameter); });
p2.catch((reject_err) => { console.log(reject_err); });


// Now create a promise 

function getPromise(isAllow) {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(isAllow) {
                resolve('Welcome in our team.');
            }
            else {
                reject(new Error('Soory. you are failed'));
            }
        }, 5000);
        
    });
    
}
getPromise(true)
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej.message);
    });


// Now create a promise with Fetch-API 

const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users`)
    .then((res) => {
        return res.json();
    })
    .then((res_data) => {
        // res_data.map(data => console.log(data.name));
        let x = res_data.map((data) => {
            let li = document.createElement('li');
            let text = `Name: ${data.name};   Phone: ${data.phone}`;
            let textNode = document.createTextNode(text);
            
            li.appendChild(textNode);
            
            return li;
        });
        x.forEach(element => {
            document.getElementById('ulId').appendChild(element);
        });
        
    })
    .catch((err) => {
        console.log(err);
    })
