'use strict';

const fs = require('fs');
const { fgColorHex } = require('terminal-text-color');

let language = () => {
    fs.readFile('./language/languages.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
    
        var lines = data.trim().split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
    
        console.log(fgColorHex('E1E1DD'), 'implement - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
}

exports.language = language