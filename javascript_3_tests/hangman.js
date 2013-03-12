var fs = require('fs');
var readline = require('readline');
var hangman_helper = require('../../js7_code/javascript_3_code/hangman_helper');

var LEGAL_CHARS = /^[A-ZÄÖÜa-zäöü]$/;

var words = readWords('hangman_words.txt');
var word = words[getRandomInt(words.length)];
commandLine(word);

function commandLine(word) {
    var usedChars = [];

    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('hangman> ');
    rl.prompt();

    rl.on('line', function(line) {
        line = line.trim().toLocaleLowerCase();
        if (line.length === 0) {
            // ignore empty lines
        } else if (line === ':q') {
            rl.close();
            return;
        } else if (!LEGAL_CHARS.test(line)) {
            console.log('Bitte genau einen Buchstaben (keine Sonderzeichen oder Ziffern) eingeben!')
        } else if (usedChars.indexOf(line) >= 0) {
            console.log('Der Buchstabe wurde schon einmal verwendet');
        } else {
            usedChars.push(line);
            var result = hangman_helper.computeResult(word, usedChars);
            if (result === null) {
                console.log('Wort erraten: '+word);
                rl.close();
                return;
            } else {
                console.log(result);
            }
        }
        rl.prompt();
    }).on('close', function() {
        console.log('Bye!');
        process.exit(0);
    });
}

function readWords(filename) {
    var text = fs.readFileSync(filename, "utf8");
    var words = text.split(/\r?\n/);

    words = words.map(function (x) { return x.trim() });
    words = words.filter(function (x) {
        return !(/^#.*/.test(x) || x.length === 0);
    });
    return words;
}

function getRandomInt(min, max) {
    if (arguments.length === 0) {
        throw new Error('Need at least one argument');
    }
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
