// DOM Events:- Events are signals that something has occurred.(input/action).
// onclick(when an element is clicked). :- this is inline method

// onmouseenter(when mouse enters element).
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     alert("button was clicked");
// };

// let btns=document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;

//     btn.onmouseenter = function () {   // onmouseenter
//         console.log("you entered a button");
//     }
//     console.log(btn);
// }

// function sayHello() {
//     alert('hello!');
// }

// // Event Listener:- addEventListener.
// btn.addEventListener("click", sayHello);


// // double click:-
// btn.addEventListener("dblclick", function() {
//     console.log("you double clicked me");
// });

// Event Listener for Elements:- p, heading tag h1,h2..
let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("mouse inside div");
});

// this in Event Listeners :-When 'this' is used in a callback of event handller of something, it refers to that something.
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// Keyboard Events:-
let btn = document.querySelector("button");

btn.addEventListener("dblclick", function (event) {
    console.log(event);
    console.log("button clicked");
});


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function() {
//     console.log("key was pressed");
// });

let inp = document.querySelector("input");

inp.addEventListener("keyup", function() {
    console.log("key was released");
})

// Form Events :-
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    console.log(inp);
    console.log(inp.innerText);
});

// More Events:-
// Change event:- The change event occurs when the value of an elemnt has been changed(only works on <input>, <textarea> and <select> elments).

// input event:- The input events fires when the value of an <input>, or <textarea> element has been changed.
let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("input changed");
    console.log("final value =", user.value);
});
