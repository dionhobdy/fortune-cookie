'use strict';

const fs = require('fs');
const { fgColorHex } = require('terminal-text-color');

let  beginner = () => {
    fs.readFile('./projects/beginner.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
    
        var lines = data.trim().split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
    
        console.log(fgColorHex('E1E1DD'), 'beginner project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
}

let intermediate = () => {
    fs.readFile('./projects/intermediate.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
    
        var lines = data.trim().split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
    
        console.log(fgColorHex('E1E1DD'), 'intermediate project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
}

let advance = () => {
    fs.readFile('./projects/advance.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
    
        var lines = data.trim().split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
    
        console.log(fgColorHex('E1E1DD'), 'advance project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
}

exports.beginner = beginner
exports.intermediate = intermediate
exports.advance = advance