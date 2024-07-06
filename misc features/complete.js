'use strict';

const fs = require('fs');
const prompts = require('prompts');

let x;
let data;
let rawData = fs.readFileSync(data);
let parsedData = JSON.parse(rawData);
let pushedData;

let ifState = () => {
    if (x == 0) {
        console.log('Kudos! Project added to completed projects data!');
        parsedData.push(pushedData);
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