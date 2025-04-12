// Async & Await Function :- 

async function greet() {
    throw "404 page not found";
    return "hello world";  //return a promise
}

greet() 
 .then((result) => {
    console.log("promise was resolved");
    console.log("result was :", result);
 })
 .catch((err) => {
    console.log("promise was rejected with err :", err);
 });


 
// Await Keyword:- pause the execution of its surrounding async function until the promise is settled.
function getNum() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() *10) + 1;
        console.log(num);
        resolve();
    }, 1000);
   
   });
}

async function demo() {
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
   await getNum();
    getNum();
}