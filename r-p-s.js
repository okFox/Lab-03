import { rpsReturn } from 'rpsReturn.js'; 

const myButton = document.getElementById('my-button');




const playerChoice = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedSide = selectedRadioButton.value;
};



let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice = 0) {
    computerChoice = 'rock';
} else if (computerChoice = 1) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

