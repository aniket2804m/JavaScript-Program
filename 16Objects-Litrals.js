// Objects-Litrals :-it used to store keyed collection & complex entities.

// Creating Object Literals:-
let student = {
    name: "Aniket",
    age: 22,
    marks: 85
};
console.log(student)

const item = {
    price: 100,
    discount: 50,
    color: ["red", "pink"]
};
console.log(item);

// Create Post:-
// Thread/ Twitter Post:- create an object literal for the properties of thread/ twitter post which includes
// *username, *content, *likes, *reposts, *tags.
const post = {
    username: "@aniketsurya1234",
    content: "This is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@shrdamam", "@delta"]
}
console.log(post);

// Get Values:-
// Js automatically convert object keys to strings.
let obj = {
    1: "a",
    2: "b",
    nul: "d",
    true: "c",
    undefined: "e"
};
console.log(obj);

// Add/ Update Value:-
let students = {
    name: "Aniket",
    age: 22,
    marks: 85,
    city: "latur"
}
console.log(students);
// Change the city pune
console.log(students.city = "pune");
console.log(students);

// Add a new property, gender:"male" 
console.log(students.gender = "male");
console.log(students);

// Change the marks to "A"
console.log(students.marks = "A");
console.log(students);


// Nested Object :- Object of Objects.
// Storing information of multiple students.
let classinfo = {
    aniket: {
        grade: "A+",
        city: "pune"
    },
    jagdish: {
        grade: "O",
        city: "Sangli"
    },
    karan: {
        grade: "A",
        city: "pune"
    }
}
console.log(classinfo);
console.log(classinfo.aniket);
console.log(classinfo.aniket.city);

// Arrays of Objects:-Storing information of multiple students.
const classinfo1 = [
    {
        grade: "A+",
        city: "pune"
    },
    {
        grade: "O",
        city: "Sangli"
    } ,
    {
        grade: "A",
        city: "pune"
    }
]
console.log(classinfo1);

// Math Object:-
// Generate a random number between 1 and 100.
let math =Math.floor(Math.random()*100)+1;
console.log(math);
// Generate a random number between 1 and 5.
let m= Math.floor(Math.random()*5)+1;
console.log(m);
// Generate a random number 21 to 25.
let m1 =Math.floor(Math.random()*5)+21;
console.log(m1);


// Guessing Game:-
// user enter a max number & then tries to guess a random generated number between 1 to max.
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);