// IMPORT MODULES under test here:
import { rpsReturn } from './RPSTEST.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
const player = 'rock'; 
const computer = 'paper'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsReturn(player, computer)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, loose);
});



Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

TDD a checkResult function that:

Has two parameters: player and computer
Returns one of the following values:
draw - the throws are identical
win - the player's throw beats the computer throw
lose - the computer's throw beats the player's throw
Write one test at a time, each test can address one of the nine possible outcomes.

You can assume valid input, meaning the passed input will always be a valid throw of rock, paper, or scissors.