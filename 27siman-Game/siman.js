// 1:-KeyPress => game start
// 2:-btn flass + level 1
// 3:-btn press [EventListner] -> check user
// 4: check -> same-levelup or game over

let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// 1:-KeyPress => game start
document.addEventListener("keypress", function() {
    if (started == false) {
    console.log("game started");
    started = true;
    }

    levelUp();
});

// 2:-btn flass + level 1
function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
    btn.classList.remove("flash");
   }, 500);
};

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash");
    }, 500);
 };

// 3:-btn press [EventListner] -> check user
// 4: check -> same-levelup or game over
function levelUp() {
    level++;
    h2.innerText = `level ${level}`;

    // random btn choose
    let randIx = Math.floor(Math.random() *3);
    let randColor = btns[randIx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);

}

function checkAns() {
    // console.log("curr level :", level);
    let idx = level -1;

    if (userSeq[idx] === gameSeq[idx]){
        console.log("same value");
    } else {
        h2.innerText = `Game Over! Press any key to start.`;
    }
}

// Button EventListeners:-
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}