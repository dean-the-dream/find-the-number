const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 5;
let attemptsParent = document.querySelector("#attempts p");
let statusParent = document.querySelector("#status p");
let nextStepParent = document.querySelector("#next-step p");  //.innerHTML = `<p>You have ${guesses} guesses left!</p>`
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
                console.log("The Guess Is High")
                highNum = userGuess;
            } else {
                console.log("The Guess Is Low")
                lowNum = userGuess;
            }
    } 

    

function winOrLose () {
    if(userGuessInt == randomNumber){
        statusChild = "You Guessed Correctly";
        nextStepParent.innerText = `Click Here to Play Again`
    }

}


function displayResults () {
    statusParent.replaceChild(statusChild);
    attemptsParent.innerText = `You have ${guesses} guesses left!`;
    nextStepParent.innerText = `Enter a number between ${highNum} and ${lowNum}`;
}


function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
