// Sreing Method:- action that can be performed on object.

// format :- stringName.method()

// trim method
// let msg = " he  llo ";
// msg.trim();
// console.log(msg);

// let password = prompt("set your password");
// let newpassword = password.trim();
// console.log(newpassword);

// String are Immutable in js:- 
// No changes can be made to strings.
 
// Trim() method
let msg = "   Apna College  ";
console.log(msg.trim());

// To Uppercase Method and To LowerCase.
let name = "Aniket Suryawanshi";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// String Methods with Arguments:- Arguments is a some value that we pass to the method.
// indexof Method.
let agu = "ILoveCoding";
console.log(agu.indexOf("Love"));
console.log(agu.indexOf("I"));

// Method Chaining :-using one method after another. Order of executon will be lift to right.
let smg1 = "    Aniket   "
let newmsg = smg1.trim().toUpperCase();


// Slice Method:- Return a part of the original string as a new string.
let smg2 = "apnacollege";
console.log(smg2.slice(0,4));
console.log(smg2.slice(4, smg2.length));

console.log(smg2.slice(-1)); //11-1 => 10  e
console.log(smg2.slice(-2)); //11-2 => 9   ge

// replace :- searches a value in the string & return a new string with the value replaced.
let smg3 = "ILoveCoding";
console.log(smg3.replace("Love", "do"));

console.log(smg3.replace("o","x"));

// repeat Method:- Return a string with the number of copies of a string
let str = "Mango";
console.log(str.repeat(2));

// Practice Qs:- 
// QS1 :- For the Give String , Trim it & convert it toUppercase
let smg4 = "       help!";
console.log(smg4.trim().toUpperCase());

// QS2 :- For the String -> 
let name1 = "ApnaCollege";

console.log(name1.slice(4,9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna","Our"));
console.log(name1.slice(4).replace("l","t")); 