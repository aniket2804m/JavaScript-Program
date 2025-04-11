// API :- Application Programming Interface.
// user -> request(in server) -> response ->web(in browser)
// Apis -> data(Json) it is return to json format data



// Accessing some APIs:-


// Testing API request:-  *Hoppscoth, *Postman.

// Our First API request:- using Fetch
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
         console.log("data1 =",data.fact);
         return fetch(url);
     })
     .then((res) => {
        return res.json();
     })
     .then((data2) => {
        console.log("data2 =",data2.fact);
     })
    .catch((err) => {
        console.log("ERROR - ", err);
    });

    console.log("I am happy");

    // using Fetch with async/await:-


let btn= document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

    let url1 = "https://catfact.ninja/fact";

    async function getFacts() {
      try  {
          let res = await axios.get(url1);
          return res.data.fact;
        } 
        catch (e) {
            console.log("error -", e);
            console.log("No fact found");
        }
    }