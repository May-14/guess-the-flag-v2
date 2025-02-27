let currentList = ALL_COUNTRIES_AND_TERRITORIES_ARRAY;
let availableIndexesInList = currentList.length - 1;
const flag = document.querySelector(".flag-of-country")
const option1 = document.querySelector(".option-1")
const option2 = document.querySelector(".option-2")
const option3 = document.querySelector(".option-3")
const option4 = document.querySelector(".option-4")
const allOptions = document.querySelectorAll(".options p")
const h1 = document.querySelector("h1")


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
    console.log(result)
}


function playRound() {
    let indexesOfAllChosenCountries = [];
    let userChoiceIsCorrect = "";
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
            userChoiceIsCorrect = checkIfChoiceIsCorrect(option.textContent, currentList[indexOfCorrectChoice]);
            if (userChoiceIsCorrect === true) {
                h1.textContent = "Correct!"
                option.setAttribute("style", "border: 1px, solid, green")
            } else {
                h1.textContent = `Incorrect! That was the flag of ${currentList[indexOfCorrectChoice]}.`
                option.setAttribute("style", "border: 1px, solid, red")
                allOptions.forEach(option => {
                    if (option.textContent === currentList[indexOfCorrectChoice]) {
                        option.setAttribute("style", "border: 1px, solid, green")
                    }
                })
            }
        })
    })
}



playRound()