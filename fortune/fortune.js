'use strict';

const { fgColorHex } = require('terminal-text-color');
const fs = require('fs');

let fortune = () => {
    fs.readFile('./fortune/fortunes.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return;
        }
    
        var lines = data.trim().split('\n');
        const randomIndex = Math.floor(Math.random() * lines.length);
    
        console.log(fgColorHex('E1E1DD'), 'fortune - ' + fgColorHex('9BB6E0'), lines[randomIndex]);
    })
}

let lotto = () => {
    let arr = [];
    while (arr.length < 6) {
        let r = Math.floor(Math.random() * 45) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    arr.sort();
    console.log(fgColorHex('E1E1DD'), 'lotto numbers - ' + fgColorHex('ED0A3F'), `${arr.join(' ').toString()}`);
}

exports.fortune = fortune
exports.lotto = lotto