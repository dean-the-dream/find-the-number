const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector(".main-box__body-right");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 10;
const guessesRemaining = document.querySelector(".guess__remaining");
let guessResults = document.querySelector(".guess__results");
let statusChild;
const guessHint = document.querySelector(".guess__hint");
const tryAgain = document.querySelector(".try-again");
guessesRemaining.innerHTML=`You have ${guesses} guesses!`
let gameFinished = false
userGuess.focus();
userGuess.select();

function checkGuess(e) {
    e.preventDefault();
    if(!isNaN(parseFloat(userGuess.value)) && ((parseFloat(userGuess.value) > 0) && (parseFloat(userGuess.value) < 101)  && (gameFinished == false))){
        if(e.target.className.includes("check")){
            console.log("Checking the guess")
            userGuessInt = +userGuess.value;
            userGuess.value = "";
            if((userGuessInt == randomNumber) || (guesses == 0)){
                winOrLose();
            } else {
                guessWrong()
            }
            
        }
    } else {
        guessHint.innerText = `Please enter a number between ${lowNum} and ${highNum}`
    }
    guesses--
    
}


function guessWrong() {
    console.log("The Guess Is Incorrect")
    guessResults.innerText = "You Guessed Incorrectly";
    if(userGuessInt > randomNumber && (guesses > 0)){
            console.log("The Guess Is High")
            userGuessInt < highNum ? highNum = userGuessInt : null;
        } else {
            console.log("The Guess Is Low")
            userGuessInt > lowNum ? lowNum = userGuessInt : null;
        }
    displayResults()
    } 

    

function winOrLose () {
    if(userGuessInt == randomNumber){
        guessResults.innerHTML = "You Win!";
        guessHint.style.display = "none";
        guessesRemaining.innerText = "You Guessed Correctly!";
    } else {
        statusChild = "You Lose!";
        guessesRemaining.innerText = `You used all of your guesses.`
        guessHint.style.display = "none";
        guessResults.innerText = "You Loose"
    }
    gameFinished = true;
    tryAgain.style.opacity = "1";

}


function displayResults () {
    console.log("Displaying Results")
    // guessResults.innerText = statusChild;
    switch (guesses){
        case 10:
            guessesRemaining.innerText = `You have ${guesses} guesses!`;  
            break;  
        case 1:
            guessesRemaining.innerText = `You have ${guesses} guess left!`;  
            tryAgain.style = "transparency: 1;"
            break;
        case 0:
            guessesRemaining.innerText = `No More Guesses!`;  
            break;
        default:
            guessesRemaining.innerText = `You have ${guesses} guesses left!`
    }
    
    guessHint.innerText = `Enter a number between ${lowNum} and ${highNum}`;
}


function restart(){
    gameFinished = false;
    tryAgain.style = null;
    guesses = 10;
    lowNum = 1;
    highNum = 100;
    guessHint.innerText = `Enter a number between ${lowNum} and ${highNum}`;
    guessHint.style.display = null;
    guessesRemaining.innerHTML=`You have ${guesses} guesses!`;
    userGuess.value = ""
    guessResults.style.display = "none"
}

mainSection.addEventListener("click", checkGuess)
tryAgain.addEventListener("click", restart)