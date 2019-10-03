import { compare } from './test/RPSTEST.js/index.js'; 

const myButton = document.getElementById('my-button');
const compG = computerChoice (); 
const personG = userChoice (); 

let computerChoice = Math.floor(Math.random() * 3);
if (computerChoice < 1) {
    computerChoice = 'rock';
} else if (computerChoice < 2) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}


const makeGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userChoice = selectedRadioButton.value;
};    


let results = compare (computerChoice, makeGuess); 


myButton.addEventListener('click', computerChoice);     
