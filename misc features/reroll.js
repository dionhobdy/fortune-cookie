const prompts = require('prompts'); 

let reRoll = () => {
    const reRoll = prompts({
        type: 'confirm',
        name: 'reroll',
        message: 'Would you like to reroll?',
        initial: false
    });
};

exports.reRoll = reRoll