const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userguess = document.querySelector("input");
let lowNum = 1;
let highNum = 100;
let guesses = 5;
let attempts = document.querySelector("#attempts");  //.innerHTML = `<p>You have ${guesses} guesses left!</p>`
function checkGuess(e) {
    e.preventDefault();
    if(e.target.id == "guess"){
        
        let x = userguess.value;
        userguess.innerText = "";
        (Number(x) == randomNumber) ? guessRight() : guessWrong(); 
    }
    
}

function guessRight() {

}

function guessWrong() {

}

function guessHigh() {

}

function guessLow() {

}
function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
