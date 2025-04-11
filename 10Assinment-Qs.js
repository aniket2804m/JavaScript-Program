// Qs1.Create a number variable num with some value.Now,print“good”ifthenumberisdivisibleby10andprint“bad”ifitisnot
let num = 21;

if(num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

// using alert and prompt
let name = prompt("please enter your name");

let age = prompt("please enter your age");

alert(`${name} is ${age} year old`);

// Switch Statements to print month in a quarter.
let quarter = 1;
 
switch(quarter) {
    case 1 : console.log("Janavary, Feb , March");
    break;

    case 2 : console.log("Apil, May , June");
    break;

    case 3 : console.log("july, Augest, sept");
    break;

    case 4 : console.log("oct, Nov, Dec");
    break;

    default : console.log("NOT a QUARTER!");
}