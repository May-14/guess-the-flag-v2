let currentList = ALL_COUNTRIES_AND_TERRITORIES_ARRAY;
let availableIndexesInList = currentList.length - 1;
const flag = document.querySelector(".flag-of-country")
const option1 = document.querySelector(".option-1")
const option2 = document.querySelector(".option-2")
const option3 = document.querySelector(".option-3")
const option4 = document.querySelector(".option-4")
const allOptions = document.querySelectorAll(".options p")


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

function checkIfChoiceIsCorrect(string) {
    if (string === currentList[indexOfCorrectChoice]) {
        console.log("true")
        return true;
    } else {
        console.log("false")
        return false;
    }
}

function checkIfChoiceIsCorrect(choice, correctChoice) {
    if (choice === correctChoice) {
        return true;
    } else {
        return false;
    }
}


function playRound() {
    let indexesOfAllChosenCountries = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = randomIntFromInterval(0, availableIndexesInList);
        indexesOfAllChosenCountries[i] = randomNumber;
        console.log(currentList[randomNumber])
    }
    let indexOfCorrectChoice = getIndexOfCorrectChoice(indexesOfAllChosenCountries);
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
            checkIfChoiceIsCorrect(option.textContent, currentList[indexOfCorrectChoice])
        })
    })
}



playRound()