// IMPORT MODULES under test here:
import { compare } from './RPSTEST.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'rock'; 
    const personG = 'paper'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(compG, personG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});


