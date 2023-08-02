const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAverage(fistGrade, secondGrade, thirdGrade) {
    return ((Number(fistGrade) + Number(secondGrade) + Number(thirdGrade)) / 3).toFixed(2);
}

function run() {
    rl.question('First grade: ', (fistGrade) => {
        rl.question('Second grade: ', (secondGrade) => {
            rl.question('Third grade: ', (thirdGrade) => {
                const result = calculateAverage(fistGrade, secondGrade, thirdGrade);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

run();
