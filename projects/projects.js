'use strict';

// local module calls
const { reRoll } = require('../misc features/reroll');
const { language } = require('../language/languages');
const { fortune, lotto } = require('../fortune/fortune');

// npm module calls
const fs = require('fs');
const { fgColorHex } = require('terminal-text-color');

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
        // return the language function.
        language();
        // return the fortune function.
        fortune();
        // return the lotto function.
        lotto();
        // call reRoll.
        reRoll();
    });
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
        // return the language function.
        language();
        // return the fortune function.
        fortune();
        // return the lotto function.
        lotto();
        // call reRoll.
        reRoll();
    });
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
        // return the language function.
        language();
        // return the fortune function.
        fortune();
        // return the lotto function.
        lotto();
        // call reRoll.
        reRoll();
    });
}

// place holder for the all function. outputs one project from each difficulty, random language, random fortune and lotto numbers. 
let all = () => {
    fs.readFile('./projcts/beginner.txt', function(err1, data1) {
        fs.readFile('./projects/intermediate.txt', function(err2, data2) {
            fs.readFile('./projects/advance.txt', function(err3, data3) {
                // format the file to make it readable to the function.
                var lines1 = data1.trim().split('\n');
                var lines2 = data2.trim().split('\n');
                var lines3 = data3.trim().split('\n');
                // random number generator from zero to beginner.txt length of lines
                const randomIndex1 = Math.floor(Math.random() * lines1.length);
                const randomIndex2 = Math.floor(Math.random() * lines2.length);
                const randomIndex3 = Math.floor(Math.random() * lines3.length);
                // print the beginner project.
                console.log(fgColorHex('E1E1DD'), 'beginner project - ' + fgColorHex('E1E1DD'), lines1[randomIndex1]);
                console.log(fgColorHex('E1E1DD'), 'intermediate project - ' + fgColorHex('E1E1DD'), lines2[randomIndex2]);
                console.log(fgColorHex('E1E1DD'), 'advance project - ' + fgColorHex('E1E1DD'), lines3[randomIndex3]);
            })
        })
    })
    // return the language function.
    language();
    // return the fortune function.
    fortune();
    // return the lotto function.
    lotto();
    // call reRoll.
    reRoll();
}

// export all functions for main.js to call
exports.beginner = beginner
exports.intermediate = intermediate
exports.advance = advance
exports.all = all