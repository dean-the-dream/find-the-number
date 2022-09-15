const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt
let lowNum = 1;
let highNum = 100;
let guesses = 5;
let attempts = document.querySelector("#attempts");  //.innerHTML = `<p>You have ${guesses} guesses left!</p>`
function checkGuess(e) {
    
    e.preventDefault();
    if(e.target.id == "guess"){
        console.log("Checking the guess")
        userGuessInt = Number(userGuess.value);
        console.log(userGuessInt)
        userGuess.value = "";
        (Number(x) == randomNumber) ? guessRight() : guessWrong(); 
    }
    
}

function guessRight() {
    console.log("The Guess Is Correct")
    

}

function guessWrong() {
    console.log("The Guess Is Incorrect")

}

function guessHigh() {
    console.log("The Guess Is High")
}

function guessLow() {
    console.log("The Guess Is Low")
}
function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
