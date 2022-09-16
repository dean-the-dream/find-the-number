const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 5;
let attempts = document.querySelector("#attempts p");
let statusParent = document.querySelector("#status p");
let statusChild;  //.innerHTML = `<p>You have ${guesses} guesses left!</p>`
function checkGuess(e) {
    
    e.preventDefault();
    if(e.target.id == "guess"){
        console.log("Checking the guess")
        userGuessInt = Number(userGuess.value);
        userGuess.value = "";
        if((userGuessInt == randomNumber) || (guesses == 0)){
            winOrLose();
        } else {
            guessWrong()
        }
        // (userGuessInt == randomNumber) ? guessRight() : guessWrong(); 
    }
    guesses--
}


function guessWrong() {
    console.log("The Guess Is Incorrect")
        statusChild = "You Guessed Incorrectly";
        if(userGuessInt > randomNumber){
                guessHigh();
            } else {
                guessLow();
            }
    } 

    

function winOrLose () {
    if(guesses){}

}

function guessHigh() {
    console.log("The Guess Is High")
    highNum = userGuess;
}

function guessLow() {
    console.log("The Guess Is Low")
    lowNum = userGuess;
}


function displayResults () {
    statusParent.appendChild(statusChild)
    attempts.innerHTML = `You have ${guesses} guesses left!`

}


function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
