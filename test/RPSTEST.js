export const compare = (compG, personG) => {
    if (compG === personG) {
        throw 'TIE!';
    }


    if (compG === 'paper') {
        if (personG === 'rock') {
            throw 'WIN!';
        } else {
            throw 'LOSE!';
        }
    }


    if (compG === 'rock') {
        if (personG === 'scissors') {
            throw 'WIN!';
        } else {
            throw 'LOOSE!';
        }
    }



    if (compG === 'scissors') {
        if (personG === 'rock') {
            throw 'LOSE!';
        } else {
            throw 'WIN!';
        }
    }


};