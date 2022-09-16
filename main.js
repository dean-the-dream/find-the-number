const randomNumber = Math.floor(Math.random() * 100) + 1;
const mainSection = document.querySelector("#main");
let userGuess = document.querySelector("input");
let userGuessInt;
let lowNum = 1;
let highNum = 100;
let guesses = 10;
const attemptsParent = document.querySelector("#attempts p");
const statusParent = document.querySelector("#status p");
let statusChild;
const nextStepParent = document.querySelector("#next-step p");
const tryAgain = document.querySelector("#try-again");
attemptsParent.innerHTML=`You have ${guesses} guesses!`
userGuess.focus();
userGuess.select();

function checkGuess(e) {
    e.preventDefault();
    if(!isNaN(parseFloat(userGuess.value)) && ((parseFloat(userGuess.value) > 0) && (parseFloat(userGuess.value) < 101))){
        if(e.target.id == "guess"){
            console.log("Checking the guess")
            userGuessInt = Number(userGuess.value);
            userGuess.value = "";
            if((userGuessInt == randomNumber) || (guesses == 0)){
                winOrLose();
            } else {
                guessWrong()
            }
            guesses--
        }
    } else {
        nextStepParent.innerText = `Please enter a number between ${lowNum} and ${highNum}`
    }
    
    
}


function guessWrong() {
    console.log("The Guess Is Incorrect")
        statusParent.innerHTML = "You Guessed Incorrectly";
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
        statusParent.innerHTML = "You Guessed Correctly!";
        nextStepParent.innerText = `Click Here to Play Again`
        attemptsParent.style.display = "none";
    } else {
        statusChild = "You Lose!";
        nextStepParent.innerText = `You Used all of your guesses.`
        attemptsParent.style.display = "none";
    }
    tryAgain.style.opacity = "1";

}


function displayResults () {
    console.log("Displaying Results")
    statusParent.innerText = statusChild;
    switch (guesses){
        case 10:
            attemptsParent.innerText = `You have ${guesses} guesses!`;  
            break;  
        case 1:
            attemptsParent.innerText = `You have ${guesses} guess left!`;  
            tryAgain.style = "transparency: 1;"
            break;
        case 0:
            attemptsParent.innerText = `No More Guesses!`;  
            break;
        default:
            attemptsParent.innerText = `You have ${guesses} guesses left!`
    }
    
    nextStepParent.innerText = `Enter a number between ${lowNum} and ${highNum}`;
}


function restart(){
    tryAgain.style = null;
    guesses = 10;
    lowNum = 1;
    highNum = 100;
    nextStepParent.innerText = `Enter a number between ${lowNum} and ${highNum}`
    attemptsParent.style.display = "none";
}

mainSection.addEventListener("click", checkGuess)
tryAgain.addEventListener("click", restart)
