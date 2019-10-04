import computerChoice from './computerChoice.js';
import compare from './RPSTEST.js';

const myButton = document.getElementById('my-button');

let getRandomNum = Math.floor(Math.random() * 3);



const makeGuess = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userChoice = selectedRadioButton.value;
};    


let results = compare (computerChoice, makeGuess); 


myButton.addEventListener('click', computerChoice);     
