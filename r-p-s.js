import computerChoice from './computerChoice.js';
import compare from './RPSTEST.js';

const myButton = document.getElementById('my-button');
let getRandomNum = Math.floor(Math.random() * 3);
// DOM elements needed: W-L-D span, computer's last throw span



//set state
// track wins-loses-draw
let wld = [0, 0, 0];
let compThrewLast = 

//result of each game
//what computer threw 

const makeGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userChoice = selectedRadioButton.value;
};    


let results = compare (computerChoice, makeGuess); 


myButton.addEventListener('click', computerChoice);     

wld++[0];