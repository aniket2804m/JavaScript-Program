// 22Array-Method1 :-
// forEach Method:-
// arr.forEach(some function definition or name);
let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
});

// Map Method:-
/*syntax:-
       let newArr = arr.map(some function definition or name);
 */
let num = [1,2,3,4,5];

let double = num.map((el) => {
    return el * 2;
});
console.log(double);

// Marks coverted into GPA using map function:-
let student = [
    {
        name: "Aniket",
        marks: 95,
    },
    {
        name: "Aniket",
        marks: 97.08,
    },
    {
        name: "Aniket",
        marks: 92,
    },
];

let gpa = student.map( (el) => {
    return el.marks / 10;
});
console.log(gpa);


// filter Function
/*syntax :-
        let newArr = arr.filter(some function definition or name); 
*/
let nums = [1, 2, 3, 4, 5, 6, 7,8 , 9, 10, 11, 12, 13];
let ans = nums.filter((el) => {
    // return el % 2 == 0; //even => true,
    return el % 2 != 0; //odd => false
})
console.log(ans);

// Every :-return true if every element of array gives true for some function. else return false.
/* syntax:-
       arr.every(some function definition or name);

       every even arr = true
       every odd arr = true
       every random arr = false
 */
let arr1 = [1,2,3,4,5].every ( (el) => (el%2 == 0));
console.log(arr1);

let arr2 = [2,4,6,8].every ( (el) => (el%2 == 0));
console.log(arr2);

let arr3 = [1,3,5].every ( (el) => !(el%2 == 0));
console.log(arr3);

// Reduce :- Reduces the array to a single value.
/* syntax :-
     arr.reduce(reducer function with 2 variables for (acc, element));
     
*/

let num1 = [1,2,3,4];
let finalval = num1.reduce( (res, el) => res + el);
console.log(finalval);

// Maximum in array:-
let Ar = [1, 4, 5, 6, 6, 7, 9, 11];

let max = -1;

for (let i =0; i< Ar.length; i++) {
    if (max <Ar[i]) {
        max = Ar[i];
    }
}
console.log(max);

// Practice Qs:-
// Check if all numbers in our array are multiple of 10 or not.
let n = [10, 20, 30, 40];

let ans1 = n.every( (el) => el % 10 ==0);

console.log(ans1);

// create a function to find the min number in an array.
let num2 = [1,2,45,67,8,9,3,4];
let min = num2.reduce( (min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});

console.log(min);


// Default parameters:- Giving a default value to the arguments.
function sum(a, b=2) {
     return a + b;
}
console.log(sum(2, 4));

// spread Method:- Expand an iterable into multiple values
/* syntax:-
      function func(...arr) {
      //do something
      }
*/
let Arr = [1, 2, 3, 4, 5, 6];
console.log(Math.min(...Arr));
console.log(Math.max(...Arr));
console.log(...Arr);
console.log(..."Aniket Suryawanshi");  //spread  method.

// Spread (Array Literals) :-
let Oarr = [1,2,34,5];
let newarr = [...Oarr];
console.log(newarr);
console.log(newarr.push(6));
console.log(newarr);

// spread (Object Literals) :-
let data = {
    email: "aniket@gmail.com",
    password: "1234",
};

const dataCopy = {...data, id:123};
console.log(dataCopy);


// Rest :- Allows a function to take an indefinite of arguments and bundle them in an array
function sums(...args) {
    //arguments
    for (let i=0; i<args.length; i++) {
        console.log("you gave us:", args[i]);
    }
}

// Destructuring :- Storing values of array into multiple vaiable.
let names = ["tony", "Stark", "iron", "hulk", "Captain", "america"];

let [winer, runnerup, ...others] = names;

console.log(winer);
console.log(runnerup);
console.log(...others);

// Destructuring Objects:-
const student1 = {
     name: "Aniket",
     age: 22,
     class: 16,
     subjects: ["hindi", "english", "math", "science"],
     username: "aniket@2804",
     password: "1234",
};

let { usename, password, city= "Mumbai" } = student1;