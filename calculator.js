const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
    return 'Invalid operator';
}

function run() {
    rl.question('First number: ', (num1) => {
        rl.question('Choose operator (+, -, *, /): ', (operator) => {
            rl.question('Second number: ', (num2) => {
                const result = calculate(num1, operator, num2);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

run();
