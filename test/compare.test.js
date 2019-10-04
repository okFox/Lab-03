// IMPORT MODULES under test here:
import compare from '..RPSTEST.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('both computer and player throw same. result is tie', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'rock'; 
    const personG = 'rock'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(compG, personG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'TIE!');
});

test('computer throws paper and player throws rock. result is lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compG = 'paper'; 
    const personG = 'rock'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(compG, personG);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE!');
});

