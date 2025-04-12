// Loops :- Used to repeted a piece of code.
/* For loop :-

  syntax:-

       for(initialisation; condition; updation) {
          //do something
       }       
*/
console.log("For Loops");
for(let i=1; i<=5; i++) {
    console.log(i);
}

// Print all odd numbers (1 to 15):-1,3,5,7,9...
console.log("Odd Number");
for(let i=1; i<=15; i=i+2) {
    console.log(i);
}
console.log("backwords");
for(let i=15; i>=1; i=i-2) {
    console.log(i);
}

// Print all even numbers (1 to 10):-2,4,6,8,...
console.log("Even Number");
for(let i=2; i<=10; i=i+2) {
    console.log(i);
}
console.log("backwords");
for(let i=10; i>=2; i=i-2) {
    console.log(i);
}

// infinite loops:-
// console.log("infinite loops");
// for(let i=1; ; i++) {
//     console.log(i);
// }

// Print the multiplication table for 5 :-5, 10, 15...
console.log("Print 5 Number");
for(let i=5; i<=50; i=i+5) {
    console.log(i);
}

console.log("Print 10 Number");
for(let i=10; i<=100; i=i+10) {
    console.log(i);
}

console.log("Print 4 Number");
for(let i=4; i<=40; i=i+4) {
    console.log(i);
}

// Take to user input and return output

let n = prompt("Enter your number");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

// Nested for loops:- loop in another loop
/*  for (let i=1; i<=3; i++){  ==>outer loop
      for(let j=1; j<=3; j++)  ==>inner loop
         console.log(j);
      }
*/
console.log("Nested loop");
for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

// while loop:-
console.log("while loop");
let i=1;

while(i<=5) {
    console.log(i);
    i++;
}

// Favorite Movie:-
const facMovie = "avatar";

let guess = prompt("guess my favorite movie");

while( (guess != facMovie) && (guess != "quit")) {
    guess = prompt("wrong guess. please try again");
}

if(guess == facMovie) {
    console.log("congrats!");
}else {
    console.log("you quit");
}

// brake Keyword:-
let num= 1;

while(num<=5) {
     if (num == 3) {
        break;
     }
    console.log(num);
    num++;
}
console.log("We used break at 3");


// Loops With Arrays :-
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (let i= 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
} 

// loop with nested arrays:- Nested loopd with nested arrays.
let heros = [["ironman", "spiderman", "Thor"], ["superman", "wonder-woman", "flash"] ];