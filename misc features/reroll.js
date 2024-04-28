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
};

exports.reRoll = reRoll