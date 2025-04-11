/* Operators in js:-
   *Arithmetic(+, -, *, /, %, **)
   *unary(++, --)
   *Assignment(=, +=, -=, *=, /=, %=, etc)
    */

//    *Arithmetic(+, -, *, /, %, **)
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("-----");
//unary(++, --)
console.log(a++);  //10
console.log(++a);  //12
console.log(a--);  //12
console.log(--a);  //10

//Assignment(=, +=, -=, *=, /=, %=, etc)
b = a;
console.log(b);

a = b;
console.log(a);


// Comparision Oprators:-(>, >=, <, <=, ==, !=)
let age = 18;
console.log(age > 10);
console.log(age >= 15);
console.log(age < 19);
console.log(age <= 19);
console.log(age == 18);
console.log(age =! 17);

// ==  &  ===


// Comparison for non-numbers
'a' > 'A'


// Logical Operators :- Logical Operators to combine expressions
//  && Logical AND Operatrs  ex- (exp1) && (exp2)
let log = (5 > 3) && (3 > 1);
console.log(log);

let tr = true && true;
console.log(tr);

let fl = true && false;
console.log(fl);

let M = 90;

// && Logical AND Operatrs
if(M >= 33 && M >=80) {
    console.log("pass");
    console.log("A+");
}

// || Logical OR Operators
if(M >= 33 || M >=80) {
    console.log("pass");
    console.log("A+");
}

// ! Logical Not Operators
if(!M < 33 ) {
    console.log("pass");
    console.log("A+");
}

//Truthy & Falsy :- Everything in js true or false (in boolean contex).

// falsy values :- false, 0, -0, On (Bigint value), ""(empty string), null, undefined, NaN

// Truthy values:- Everything else