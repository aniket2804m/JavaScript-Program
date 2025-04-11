// JSON :- (JavaScript Object Notation) 




// Accessing Data from JSON :-
// *JSON.parse(data) Method To parse a (string data -> JS Object)

// *JSON.stringify(json) Method To parse a (JS object data -> JSON)

let jsonRes = '{"fact":"Some notable people who disliked cats:  Napoleon Bonaparte, Dwight D. Eisenhower, Hitler.","length":89}'

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "Aniket",
    marks: 95,
}
console.log(JSON.stringify(student));