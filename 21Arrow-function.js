// Arrow functions:- arrow function define by arrow;
/* syntax:-
        const func =(arg1, arg2..) =>{function definition} 
        */
const sum = (a, b) =>{
    console.log(a+b);
};

const cube = (n) => {
    return n*n*n;
};

const power = (a, b) => {
    return a ** b;
};

const hello = () => {
    console.log("hello world");
};

// Implicit return :-
/* syntax:- 
        const func = (arg1, arg2..) => (value); 
*/
const mul = (a, b) => (a * b);

// Set setTimeout function:-
// setTimeout(function, timeout)

console.log("Hi, there");

setTimeout( () => {
    console.log("Apna college");
}, 4000);

console.log("welcome to");

// Set Interval:-
// setInterval(function, timeout) 
setInterval( () => {
    console.log("apna colloge");
}, 10000);

// This with Arrow functions:-
// Arrow 
const student = {
    name: "aniket",
    marks: 95,
    prop:this, //global scope
    getName: function() {
        return this.name;
    },
    getmarks: function() {
        return this.marks;
    },
};

// Pactice Qs:- Write an arrow function thst return the square of a number 'n'.
const square = (n) => {
    return n * n;
}

// Practice Qs:- Write a function that prints "hello world" 5 times at intervals of 2s each.
let id = setInterval( () => {
    console.log("Hello world");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("cler interval ran");
}, 10000);


// Arrow function and Normal function diffrence:-
globalThis.name="Aniket";
let obj = {
    name: "Aniket",
    arrowFun: () => {
        console.log(`Arrow: Hello, ${name}`);
    },
    normalFun: function () {
        console.log(`Normal: Hello, ${this.name}`);
    },
};

obj.arrowFun();
obj.normalFun();