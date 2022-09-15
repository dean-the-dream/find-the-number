const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 5;
let attempts = document.querySelector("#attempts");
let statusParent = document.querySelector("status");
let statusChild;  //.innerHTML = `<p>You have ${guesses} guesses left!</p>`
function checkGuess(e) {
    
    e.preventDefault();
    if(e.target.id == "guess"){
        console.log("Checking the guess")
        userGuessInt = Number(userGuess.value);
        userGuess.value = "";
        if(userGuessInt == randomNumber){
            guessRight()
        } else {
            guessWrong()
        }
        // (userGuessInt == randomNumber) ? guessRight() : guessWrong(); 
    }
    
}

function guessRight() {
    console.log("The Guess Is Correct")
    statusChild = 

}

function guessWrong() {
    console.log("The Guess Is Incorrect")

    if(userGuessInt > randomNumber){
        guessHigh();
    } else {
        guessLow();
    }

}

function guessHigh() {
    console.log("The Guess Is High")
    reduceGuess();
    highNum = userGuess;
}

function guessLow() {
    console.log("The Guess Is Low")
    reduceGuess();
    lowNum = userGuess;
}

function reduceGuess() {
    guesses -= 1;
}

function displayResults () {

}
function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
