const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(word) {
    const justVowels = word.match(/[aeiou]/gi);
    return justVowels.length;
}

function run() {
    rl.question('type something: ', (word) => {
        const result = countVowels(word);
        console.log(`The String "${word}" has ${result} vowels`);
        rl.close();
    });
}

run();