// Guess my number JS file

// Get DOM elements
const guessInputBox = document.querySelector("input.guess")
const guessButton = document.querySelector("button.check") //could select it multiple ways .getElementById or smart as well with querySelector - ("button.check") or (".left button")
const restartButton = document.querySelector("button.again")
const message = document.querySelector(".message")
const displayResult = document.querySelector(".number")
const score = document.querySelector("span.score")
const highScore = document.querySelector("span.highscore")
const tries = document.querySelector("span.tries")
const header = document.querySelector("h1.header")

//Helper functions
// amount of numbers
let n = 20
let lost = false //deciding when it's a highscore

const getRandomNumber = (n) => {
    return Math.ceil(Math.random() * n)
}

const checkIfLost = ()  => {
    if(tries.innerText == 0) {
        guessButton.disabled = true
        header.innerText = "You lost..."
        message.innerText = "TOO BAD GO AGAIN!"
        lost = true
    }
}

const evaluateGuess = () => {
    switch (true) {
        case guessInputBox.value == randomNumber:
            message.innerText = "You hit the number 🎆!"
            displayResult.innerText = randomNumber;
            header.innerText = "YOU WON!!"
            guessButton.disabled = true
            score.innerText = Number(score.innerText) + 20
            if(lost == false && score.innerText > highScore.innerText) {
                highScore.innerText = score.innerText
            }
            break;
        case guessInputBox.value > randomNumber:
            message.innerText = "Try lower ⬇️ mate.."
            tries.innerText -= 1
            checkIfLost()
            break;
        case guessInputBox.value < randomNumber:
            message.innerText = "Try higher ⬆️ g!"
            tries.innerText -= 1
            checkIfLost()
            break;
        default:
            alert("Man u managed to bug the game..")
    }
}


// Declare variables
let randomNumber = getRandomNumber(n)
console.log("Generated number:", randomNumber)

// Define events
guessButton.addEventListener("click", evaluateGuess)

restartButton.addEventListener("click", () => {
    displayResult.innerText = "?"
    message.innerText = "YOUR TIME TO SHINE, GUESS!!"
    tries.innerText = 5
    guessButton.disabled = false

    // check if the last round was a win or not
    // if round was lost then reset 0 otherwise keep going
    if(lost) {
        score.innerText = 0
        lost = false
    }

    randomNumber = getRandomNumber(n)
    console.log("Restarted. New number: ", randomNumber)
})