/*Template Literals:-  They are usd to add embedded expressions in astring */

let pencilprice = 10;
let eraserprice = 5;
// let output = "The total price is :" + (pencilprice + eraserprice) + " Rupees.";
let output = `The total price is : ${pencilprice + eraserprice} rupess` //back tick
console.log(output);

const a = 5;
const b = 10;
const sum = `The sum of a and b is: ${a + b}`;
console.log(sum); // Output: The sum of a and b is: 15