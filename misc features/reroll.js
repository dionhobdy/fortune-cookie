const prompts = require('prompts'); 

let reRoll = () => {
    const reRoll = prompts({
        type: 'select',
        name: 'value',
        message: 'Would you like to reroll?',
        choices: [
            { title: 'yes' },
            { title: 'no' }
        ],
        initial: 0
    });
    let y;
    let i = 0;

    function recurse() {
        for (i; i < 1; i++) {
            return y;
        }
    }

    if (reRoll.value === 0) { recurse(); }
};

exports.reRoll = reRoll