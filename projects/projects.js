'use strict';

// local module calls
// const { complete } = require('../misc features/complete');
const { language } = require('../language/languages');
const { fortune, lotto } = require('../fortune/fortune');

// npm module calls
const fs = require('fs');
const { fgColorHex } = require('terminal-text-color');

let featBundle = () => {
    // return the language function.
    setTimeout(language, 25);
    // return the fortune function.
    setTimeout(fortune, 50);
    // return the lotto function.
    setTimeout(lotto, 100);
    // return the reRoll function.
//    setTimeout(complete, 125);
}

// beginner function. outputs beginner project suggestion, random language, lotto numbers and fortune.
let  beginner = () => {
    // iterate through ./projects/beginner.txt and output a random line.
    fs.readFile('./projects/beginner.txt', 'utf8', (err, data) => {
        // if there is error reading file output the error.
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
        // format the file to make it readable to the function.
        var lines = data.trim().split('\n');
        // random number generator from zero to beginner.txt length of lines
        const randomIndex = Math.floor(Math.random() * lines.length);
        // print the beginner project.
        console.log(fgColorHex('E1E1DD'), 'beginner project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
    featBundle();
}

// intermediate function. outputs intermediate project suggestion, random language, lotto numbers and fortune.
let intermediate = () => {
    // iterate through ./projects/intermediate.txt and output a random line.
    fs.readFile('./projects/intermediate.txt', 'utf8', (err, data) => {
        // if there is error reading file output the error.
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
        // format the file to make it readable to the function.
        var lines = data.trim().split('\n');
        // random number generator from zero to intermediate.txt length of lines.
        const randomIndex = Math.floor(Math.random() * lines.length);
        // print the intermediate project.
        console.log(fgColorHex('E1E1DD'), 'intermediate project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });
    featBundle();
}

// advance function. outputs advance project suggestion, random language, lotto numbers and fortune.
let advance = () => {
    // iterate through ./projects/advance.txt and output a random line.
    fs.readFile('./projects/advance.txt', 'utf8', (err, data) => {
        // if there is error reading file output the error.
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
        // format the file to make it readable to the function.
        var lines = data.trim().split('\n');
        // random number generator from zero to advance.txt length of lines.
        const randomIndex = Math.floor(Math.random() * lines.length);
        // print the advance project.
        console.log(fgColorHex('E1E1DD'), 'advance project - ' + fgColorHex('E1E1DD'), lines[randomIndex]);
    });

    featBundle();
}

// any function. outputs a random challenge from any of the previous difficulties.
let any = () => {
    let rng = Math.floor(Math.random() * 3);
    if (rng === 0) {
        beginner();
    } else if (rng === 1) {
        intermediate();
    } else {
        advance();
    }
}

let achievements = () => {

}

let completed = () => {
    
}

// export all functions for main.js to call
exports.beginner = beginner
exports.intermediate = intermediate
exports.advance = advance
exports.any = any
exports.achievements = achievements
exports.completed = completed