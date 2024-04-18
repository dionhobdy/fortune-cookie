'use strict';

// local modules calls
const { beginner, intermediate, advance, all } = require('./projects/projects');
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
                { title: 'All', description: 'Displays one of each difficulty' }
            ],
            // set the the cursor automatically to the first function. which is indexed at 0.
            initial: 0
        });
        // print the prompt as response variable.
        console.log(response);

        // create if/else chain as place holder for a for loop. if the prompt input's value equal to that of the function's value, call the corresponding function. 
        if (response.value == 0) {
            beginner();
            // return the language function.
            language();
            // return the fortune function.
            fortune();
            // return the lotto function.
            lotto();
            // call reRoll.
            // reRoll();
        } else if (response.value == 1) { 
            intermediate(); 
            // return the language function.
            language();
            // return the fortune function.
            fortune();
            // return the lotto function.
            lotto();
            // call reRoll.
            // reRoll();
        } else if (response.value == 2) { 
            advance();
            // return the language function.
            language();
            // return the fortune function.
            fortune();
            // return the lotto function.
            lotto();
            // call reRoll.
            // reRoll();
        } else {
            all();
            // return the language function.
            language();
            // return the fortune function.
            fortune();
            // return the lotto function.
            lotto();
            // call reRoll.
            // reRoll();
        }

    })();
}

// return menu function to initialize the application.
menu();