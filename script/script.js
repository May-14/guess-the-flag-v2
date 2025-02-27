let currentList = ALL_COUNTRIES_AND_TERRITORIES_ARRAY;
let availableIndexesInList = currentList.length - 1;
const flag = document.querySelector(".flag-of-country")
const option1 = document.querySelector(".option-1")
const option2 = document.querySelector(".option-2")
const option3 = document.querySelector(".option-3")
const option4 = document.querySelector(".option-4")
const allOptions = document.querySelectorAll(".options div div")
const h1 = document.querySelector("h1")
let displayedScore = document.querySelector(".current-score");
let displayedHighScore = document.querySelector(".high-score")
let userScore = 0;
let highScore = 0;
let nextRoundButton = document.querySelector(".next")
let gameIsBeingPlayed = true;
let indexOfCorrectChoice = ""


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getIndexOfCorrectChoice(array) {
    let randomIndex0Through3 = randomIntFromInterval(0, 3);
    return array[randomIndex0Through3];
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}


function checkIfChoiceIsCorrect(choice, correctChoice) {
    if (choice === correctChoice) {
        return true;
    } else {
        return false;
    }
}

nextRoundButton.addEventListener("click", () => {
    resetForNextRound();
    playRound();
})

function resetForNextRound() {
    allOptions.forEach(option => {
        option.setAttribute("style", "border: none")
    })
    h1.textContent = "Guess the country";
    nextRoundButton.setAttribute("style", "visibility: hidden;")
}

function playRound() {
    gameIsBeingPlayed = true;
    let indexesOfAllChosenCountries = [];
    let userChoiceIsCorrect = "";
    for (let i = 0; i < 4; i++) {
        let randomNumber = randomIntFromInterval(0, availableIndexesInList);
        indexesOfAllChosenCountries[i] = randomNumber;
        console.log(currentList[randomNumber])
    }
    indexOfCorrectChoice = getIndexOfCorrectChoice(indexesOfAllChosenCountries);
    console.log(indexOfCorrectChoice)
    flag.setAttribute("src", 
        "./images/flag-country-svg/" + 
        getKeyByValue(ALL_COUNTRIES_AND_TERRITORIES_OBJECT, currentList[indexOfCorrectChoice]).toLowerCase() 
        + ".svg")
    option1.textContent = currentList[indexesOfAllChosenCountries[0]];
    option2.textContent = currentList[indexesOfAllChosenCountries[1]];
    option3.textContent = currentList[indexesOfAllChosenCountries[2]];
    option4.textContent = currentList[indexesOfAllChosenCountries[3]];
    allOptions.forEach(option => {
        option.addEventListener("click", () => {
            if (gameIsBeingPlayed) {
                optionText = option.querySelector("p");
                userChoiceIsCorrect = checkIfChoiceIsCorrect(optionText.textContent, currentList[indexOfCorrectChoice]);
                if (userChoiceIsCorrect === true) {
                    h1.textContent = "Correct!"
                    option.setAttribute("style", "border: 1px, solid, green")
                    userScore += 1;
                    if (userScore > highScore) {
                        highScore = userScore;
                        displayedScore.setAttribute("style", "color: rgb(225, 197, 100);")
                        displayedHighScore.textContent = `High score: ${userScore}`;
                    }
                } else {
                    h1.textContent = "Incorrect!"
                    option.setAttribute("style", "border: 1px, solid, red")
                    allOptions.forEach(option => {
                        if (option.textContent === currentList[indexOfCorrectChoice]) {
                            option.setAttribute("style", "border: 1px, solid, green")
                            displayedScore.setAttribute("style", "color: rgb(0, 150, 137);")
                        }
                    })
                    userScore = 0;
                }
                gameIsBeingPlayed = false;
                displayedScore.textContent = `Current score: ${userScore}`;
                nextRoundButton.setAttribute("style", "visibility: visible;")
            }
        })
    })
}



playRound()