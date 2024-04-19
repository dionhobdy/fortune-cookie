'use strict';

// local modules calls
const { beginner, intermediate, advance, all, any } = require('./projects/projects');
const { reRoll } = require('./misc features/reroll');
const { language } = require('./language/languages');
const { fortune, lotto } = require('./fortune/fortune');

// npm module calls
const prompts = require('prompts'); 
const { fgColorHex } = require('terminal-text-color'); // node package calls

// print application title and subtitle
    console.log(fgColorHex('DAA233'), `
░▒▓████████▓▒░▒▓██████▓▒░░▒▓███████▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓████████▓▒░ 
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░  ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░   ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░      ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░    ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░
`);
console.log(fgColorHex('DAA233'), `
 ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░▒▓██████▓▒░   
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░        
 ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓████████▓▒░ 
`);
console.log(fgColorHex('E1E1DD'), 'Coding Project Randomizer');
console.log(' ');

let featBundle = () => {
    // return the language function.
    language();
    // return the fortune function.
    setTimeout(fortune, 50);
    // return the lotto function.
    setTimeout(lotto, 100);
}

let x;
let ifState0 = () => {
    if (x == 0) {
        beginner();
    } else if (x == 1) {
        intermediate();
    } else if (x == 2) {
        advance();
    } else if (x == 3) {
        all();
    } else {
        any();
    }
}

// menu function. display the available difficulties and call the local module functions.
let menu = () => {
    (async () => {
        const response = await prompts({
            // set prompt type to select, which enables the user to select options.
            type: 'select',
            name: 'value',
            message: 'select difficulty',
            // display function names and describe functions that are not named after difficulty setting.
            choices: [
                { title:'Beginner' },
                { title: 'Intermediate' },
                { title: 'Advance' },
                { title: 'All', description: 'Displays one of each difficulty' },
                { title: 'Any', description: 'Chooses one challenge from any of the three difficulties'}
            ],
            // set the the cursor automatically to the first function. which is indexed at 0.
            initial: 0
        });
        // print the prompt as response variable.
        console.log(response);
        // create a obj that holds a key/value pair for each option.
        x = response.value;
        ifState0();
        setTimeout(featBundle, 250);
        setTimeout(reRoll, 500);
    })();
}



// return menu function to initialize the application.
menu();

exports.ifState0 = ifState0