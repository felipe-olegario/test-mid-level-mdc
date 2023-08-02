const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createTable(number) {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

function getNumberFromUser() {
  rl.question('type a number: ', (inputNumber) => {
    const number = Number(inputNumber);

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
      rl.close();
    } else {
        createTable(number);
      rl.close();
    }
  });
}

getNumberFromUser();