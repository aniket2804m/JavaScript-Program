// call-stack function:- LIFO(last in first out).

function hello() {
    console.log("Inside hello fun");
    console.log("hello");
}

function demo() {
    console.log("calling hello fun");
    hello();
}

console.log("calling demo fun");
demo();
console.log("done, bye!");

// Visualizing The Call Stack:-
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();