// Conditional Statements
 // if Statements:-
console.log("before my if statement");
let age = 23;
if(age >= 18) {
    console.log("you can vote");
    console.log("you can drive");
}
console.log("before my if statement");

if (age > 20) {
    console.log("you can not vote");
}

// 
let firstname = "Aniket";
if(firstname == "Aniket") {
    console.log(`Welcome ${firstname}`)
};

// Practice Qs:- Create a traffic light system that shows 
let color = "red";

// Traffic light System:-
if (color === "red") {
    console.log("stop");
}

if(color === "yellow") {
    console.log("slow down");
}

if(color === "Green") {
    console.log("Go");
}

// else if statements:-
let age1 = 14;
if (age1 >= 18 ) {
    console.log("you can vote");
}
else if (age1 < 18) {
    console.log("you can not vote");
}

// Marks convert into Grade System
let marks = 30;

if(marks >= 80) {
    console.log("A+"); 
}
else if (marks >= 60 ){
    console.log("A"); 
}
else if(marks >= 33){
    console.log("B");
}
else if(marks < 33) {
    console.log("F");
}

// else Statements :-
let age2 = 17;
if(age2 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can not vote");
}

// Traffic Light
if (color === "red") {
    console.log("stop");
}
if(color === "yellow") {
    console.log("slow down");
}
if(color === "Green") {
    console.log("Go");
}
else{
    console.log("Traffic light is Broken");
}

// Practice Qs:-
let size = "L";

if(size === "XL") {
    console.log("Price is Rs. 250");
}
else if(size === "L" ) {
    console.log("Price is Rs. 200");
}
else if (size === "M") {
    console.log("Price is Rs. 100");
}
else{
    console.log("Price is Rs. 50");
}

// Nsted if-else :- Nesting is writing if-else statements. it can have many levels.
let mark = 45;

if (mark >= 33) {
    console.log("Pass");
    if(mark >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!");
}


// Practice Qs:-
let num = 12;

if((num % 3 === 0) && ((num+1 == 15) || (num-1 === 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

