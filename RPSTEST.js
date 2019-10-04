
const compare = (compG, personG) => {
    if (compG === personG) {
        return 'TIE!';
    }


    if (compG === 'paper') {
        if (personG === 'rock') {
            return 'LOSE!';

        }
    }
/*

    if (compG === 'rock') {
        if (personG === 'scissors') {
            return 'WIN!';
        } else {
            return 'LOOSE!';
        }
    }



    if (compG === 'scissors') {
        if (personG === 'rock') {
            return 'LOSE!';
        } else {
            return 'WIN!';
        }
    }
*/

};

export default compare;