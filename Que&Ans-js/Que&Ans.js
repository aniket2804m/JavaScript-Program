// Given a string, rverse each word in the sentence:- oh esiak ij oleh
var str = "saare jaha se acha hindustaan humara";

var savedStr =str.split(" ")
.map(function(word) {
   return word.split("").reverse().join("");
});

console.log(savedStr.join(" "));

// How to check if an object is an array or not? provide some code.