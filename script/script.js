let currentList = ALL_COUNTRIES_AND_TERRITORIES_ARRAY;
let availableIndexesInList = currentList.length - 1;
let flag = document.querySelector(".flag-of-country")

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
}

playRound()