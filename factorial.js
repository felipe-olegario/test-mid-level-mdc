const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFactorial(number) {
    let localNumber = Number(number)
    let resultFactorial = 1;
    while (localNumber > 0) {
        resultFactorial *= localNumber;
        localNumber--
    };
    return resultFactorial;
}

function run() {
    rl.question('Enter bumber to calcultate the factorial: ', (number) => {
        const result = calculateFactorial(number);
        console.log(`Result: ${result}`);
        rl.close();
    });
}

run();