// this keyword :- "this keyword refers to an object that is executing the current piece of code.
const student = {
    name: "aniket",
    age:22,
    eng:97,
    math:69,
    phy:95,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks= ${avg}`);
    }
}

// In function, this refers to the global object.
const person = {
    firstname: "Aniket",
    lastname: "Suryawanshi",
    fullname: function() {
        return this.firstname+ " " + this.lastname;
    }
}
console.log(person.fullname());

// Alon, this refers to the global object.
let name = this;
console.log(name);