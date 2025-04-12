// Arrays Methods:-

// Push :-add to end
let cars = ["maruti", "Tata", "Mahindra", "suv"];
console.log(cars.push("Thar"));
console.log(cars)

// unshift :- add to start
console.log(cars.unshift("Toyota"));
console.log(cars);

// pop :- delete from end & return it
console.log(cars.pop());
console.log(cars);

// shift :- delete from start & return it
console.log(cars.shift())
console.log(cars);


// Practic Qs 1:-
let months = ['january', 'july', 'march', 'augest'];
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));
console.log(months);

// indexOf :- return index of something
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("red"));
console.log(primary.indexOf("green"));

// includes Methods :- search for a value
console.log(primary.includes("yellow"));  //true
console.log(primary.includes("green"));   //false

// concat method :- Mearg 2 Arrays
let marks1 = [45, 50, 60, 40];
let marks2 = [29, 40, 52, 43];

console.log(marks1.concat(marks2));

// reverse :-reverse an array
console.log(marks1.reverse());

// Slice in Array Methods:-
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2)); //blue, orange, pink, white
console.log(colors.slice(2, 3)); //blue
console.log(colors.slice(2,5));  //blue, orange, pink

// Splice :- remove/ replace/ add elements in place
// splice(start, deleteCount,)
let color = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(color.splice(4));  //pink, white
console.log(color); 
console.log(color.splice(0,1));
console.log(color);
console.log(color.splice(0,4));
console.log(color);

// sort method:- sort an array.
let days = ["monady", "sunday", "wednesday", "tuesday", "thusday", "saturday"];

console.log(days.sort());

let car = ["maruti", "tata", "mahindra", "suv"];

console.log(car.sort());


// Practice QS;-
// Qs1:-
// let start = ['january', 'july', 'march', 'augest'];
// let final ['july', 'june', 'march', 'augest']
let month = ['january', 'july', 'march', 'augest'];
console.log(month.splice(0, 2, "july", "june"));
console.log(month);

// Qs2:-Return the indexof the javaScript from the given array, if it was reversed.
let lang = ['c', "C++", "html", "JavaScript", "Python", "java", "c#", "Sql"];
console.log(lang.reverse());
console.log(lang.indexOf("JavaScript"));

// Array References:- 
let arr = ['a', 'b'];
let arrcopy = arr;
console.log(arr);

// Constant Arrays:-
const arr1 = [1, 2, 3, 4];
console.log(arr1);

// Nsted Arrays:- array of arrays
let nums = [ [2, 4], [3, 6], [4, 8] ];
console.log(nums);

let game = [ ['X', null, '0'], ['X', null, '0'], ['X', null, '0'] ];
console.log(game);
