// Scope :-Scope determines the accessibility of variables, objects, and functions from different parts.
/* There are Three type of scope :-
      *functon
      *Block
      *Lexical
*/
// Function Scope:- Variable defined a function are not accessible (visible) from outside the function.
let sum = 54; //Global Scope

function calsum(a, b) {
      let sum = a + b; //function scope
      console.log(sum);
}
calsum(1, 2);
console.log(sum);

// Block Scope:-Variables declared inside a {} block cnnot be accessed from outside the block.
{
      let a = 25;

}

for (let i = 1; i <= 5; i++) {
      console.log(i);   //block scope
}

// Lexical Scope :- a variable defined outside a function can be accessible inside another function defined after the variable declaration

// The opposite is Not true.
function OuterFun() {
      let x = 5;
      let y = 6;
      function innerFun() {
            let a = 10;
            console.log(x);
            console.log(y);
            console.log(a);
            innerFun();
      }
      //       console.log(a);
      //       innerFun();
      //
}

// practice Qs:- 
let greet = "hello";

function changeGreet() {
      let greet = "namste";
      console.log(greet);
      function innerGreet() {
            console.log(greet);
      }
}
console.log(greet);
changeGreet();


// Function Expressions:-
/* syntax:-
      const sum = function(arg1, arg2..){
            // do or return something
          } */
let sum1 = function (a, b) {
      return a + b;
}
console.log(sum1(1, 4));


// Higher Order Function:- 
// A function that dose one or both:
// *takes onr or multiple function as arguments
// *returns a function
function multipleGreet(func, n) {
      for(let i=1; i<=n; i++) {
            func();
      }
}

let greets = function() {
   console.log("hello");
}

multipleGreet(greets,2);

// Higher Oder function Exprestion:-Return a function.
let request = "odd"; //even

function oddorEvenFactory(request) {
      if (request == "odd") {
            let odd = function (n) {
                  console.log(!(n % 2 == 0));
            }
            return odd;
      } else if (request == "even") {
            let even = function (n) {
                  console.log((n % 2 == 0));
            }
            return even;
      } else {
            console.log("wrong request");
      }
}


// Methods :- Action that can be performed on an object.

 const calculator = {
      add: function(a, b) {
            return a+b;
      },
      sub: function(a, b) {
            return a-b;
      },
      mul: function(a, b) {
            return a*b;
      },
 };

 console.log(calculator.add(1,6));
 console.log(calculator.sub(1,6));
 console.log(calculator.mul(1,6));
 console.log(calculator.add(1,9));