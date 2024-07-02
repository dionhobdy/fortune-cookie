'use strict';

const prompts = require('prompts');

let x;

let ifState = () => {
    if (x == 0) {
        console.log('Yeet!');
    } else {
        return;
    }
}

let complete = () => { 
    const complete = prompts({
        type: 'select',
        name: 'value',
        message: 'Did you complete the project?',
        choices: [
            { title: 'yes' },
            { title: 'no' }
        ],
        initial: 0
    });
    x = complete.value;
    ifState();
};

exports.complete = complete