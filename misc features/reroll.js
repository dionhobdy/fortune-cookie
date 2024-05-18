'use strict';

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

    if (reRoll.value === 0) { 
        return y;
    } else {
        return;
    }
};

exports.reRoll = reRoll