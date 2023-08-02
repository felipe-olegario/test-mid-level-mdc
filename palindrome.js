const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(word) {
    let createPalindrome = '';
    for (let index = 1; index <= word.length; index++) {
        createPalindrome += word[word.length - index];
    }
    return word === createPalindrome ? true : false;
}

function run() {
    rl.question('type some word: ', (word) => {
        const result = isPalindrome(word);
        console.log(`Is a palindrome: ${result}`);
        rl.close();
    });
}

run();