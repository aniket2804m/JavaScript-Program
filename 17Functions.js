// Functions in Js:-
/* function Definition (telling js) 
  Syntax:-

      function funcName() {
        //do something
        }

        function Calling (Using the function)

          funcName();
*/

function hello() {
    console.log("hello");
}
hello();


function aniket() {
    console.log("Aniket Suryawanshi");
    console.log("I am Full-Stack Developer");
}
aniket();

// function use in Loop:-
function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}
print1to5();

// function use in if-else statements :-
function isAdult() {
    let age = 16;
    if(age >= 18) {
        console.log("adult");
    }else {
        console.log("not adult");
    }
}
isAdult();

// Practice QS1:- Create a function that prints a poem.
function printpoem() {
    console.log("Twinkle twinkle, little star");
    console.log("how I wonder what you are");
}
printpoem();

// Practice Qs2:-Create a function to roll a dice & always display the value of the dice (1 to 6).
function rolldice() {
    let rand = Math.floor(Math.random() *6) +1;
    console.log(rand);
}
rolldice();
rolldice();
rolldice();
rolldice();

// Function with Arguments:- Value we pass to the function.
/* Syntax for Functtion Arguments:-
       
       function funcName(arg1, arg2..) {
            //do somthing
       }
 */

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Aniket", 22);

function sum(a, b) {
    console.log(a + b);
}
sum(1,2);
sum(4,5);

// Qs3:- Create a function that gives us the average of 3 numbers.
function calAvg(a, b, c) {
    let avg = (a, b, c) / 2;
    console.log(avg);
}
calAvg(2, 4, 6);

// Practice Qs4:- Create a function that prints the multipliction table of a number.
function printtable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
printtable(2);

// Return Keyword:- return keyword is used to return some value from the function.

// input =>  function => output 
function sum(a, b) {
    return a +b;
}
console.log(sum(sum(1,2), 3));

// Practice Qs5:- Create a function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;
}

getSum(4);

// Practice Qs6:- create a function that returns the concatenation of all strings in an array.
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result ="";
     
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
}
concat(str);
