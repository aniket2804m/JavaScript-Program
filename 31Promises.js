// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

savetoDb("Aniket Suryawanshi",
    () => {
        console.log("success : your data was saved : ");

        savetoDb(
            "hello world",
            () => {
                console.log("success2: data2 saved");
                savetoDb("aniket", () => {
                    console.log("success3 : data2 saved");
                }, () => {
                    console.log("failure3: weah connection");
                });
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("failure : weak connection. data not saved");
    }
);

// // Promises:- The Promises Object represents the eventual completion (or failure ) of an asynchronous operation and its resulting value.
// // Promises:- resolve & reject

function savetoDb(data) {

    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            success();
        }
    });
}

savetoDb("Aniket Suryawanshi");

// Then() and catch() methods:-
// Promise -> fulfilled ->.then(), ->reject->.catch

savetoDb("Aniket Suryawanshi")
    .then(() => {
        console.log("data1 saved.");
        return savetoDb("hello world");
    })
    .then(() => {                 // Promise chaining :-
        console.log("data2 saved");
        return savetoDb("hello world");
    })
    .then(() => {                 // Promise chaining :-
        console.log("data3 saved");
    })
    .catch(() => {
        console.log("promise rejected");
    });


// Result & Errors in Promises:-
// Promises are rejected and resolved with some data(valid resilt or error).

