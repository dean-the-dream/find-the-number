const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 10;
let attemptsParent = document.querySelector("#attempts p");
let statusParent = document.querySelector("#status p");
let statusChild;
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
        
    }
    guesses--
}


function guessWrong() {
    console.log("The Guess Is Incorrect")
        statusChild = "You Guessed Incorrectly";
        if(userGuessInt > randomNumber){
                console.log("The Guess Is High")
                highNum = userGuessInt;
            } else {
                console.log("The Guess Is Low")
                lowNum = userGuessInt;
            }
            displayResults()
    } 

    

function winOrLose () {
    if(userGuessInt == randomNumber){
        statusChild = "You Guessed Correctly";
        nextStepParent.innerText = `Click Here to Play Again`
    } else {
        statusChild = "You Lose!";
        nextStepParent.innerText = `Click Here to Play Again`
    }
    displayResults();

}


function displayResults () {
    console.log("Displaying Results")
    statusParent.innerText = statusChild;
    attemptsParent.innerText = `You have ${guesses} guesses left!`;
    nextStepParent.innerText = `Enter a number between ${lowNum} and ${highNum}`;
}


function tryAgain(){
    
}

mainSection.addEventListener("click", checkGuess)
