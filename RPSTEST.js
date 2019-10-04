
const compare = (compG, personG) => {
    if (compG === personG) {
        return 'TIE!';
    }


    if (compG === 'paper') {
        if (personG === 'rock') {
            return 'LOSE!';

        }
    }
    if (compG === 'rock') {
        if (personG === 'scissors') {
            return 'LOSE!';

        }
    }



    if (compG === 'scissors') {
        if (personG === 'rock') {
            return 'WIN!';

        }
    }
    if (compG === 'paper') {
        if (personG === 'scissors') {
            return 'WIN!';

        }
    }
    if (compG === 'rock') {
        if (personG === 'paper') {
            return 'WIN!';

        }
    }
    if (compG === 'scissors') {
        if (personG === 'paper') {
            return 'LOSE!';

        }
    }
};

export default compare;