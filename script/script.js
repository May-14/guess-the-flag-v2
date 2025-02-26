let currentList = ALL_COUNTRIES_AND_TERRITORIES_ARRAY;


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let arrayOfNumbers0Through3 = [0, 1, 2, 3];
let arrayOfAllChosenNumbers = [];
let correctChoice = 0;
for (let i = 0; i < 4; i++) {
    let randomNumber = randomIntFromInterval(0, 254);
    if (i === 0) {
        correctChoice = randomNumber
    }
    let randomPosition = randomIntFromInterval(0, 3 - i);
    arrayOfAllChosenNumbers[arrayOfNumbers0Through3[randomPosition]] = randomNumber;
    arrayOfNumbers0Through3.splice(randomPosition, 1);
}
let choice1 = arrayOfAllChosenNumbers[0];
let choice2 = arrayOfAllChosenNumbers[1];
let choice3 = arrayOfAllChosenNumbers[2];
let choice4 = arrayOfAllChosenNumbers[3];
arrayOfNumbers0Through3 = [0, 1, 2, 3];
arrayOfAllChosenNumbers = [];

console.log(correctChoice)
console.log(arrayOfAllChosenNumbers)