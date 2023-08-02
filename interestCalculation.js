const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateInvestment(initialCapital, interestRate, investmentTimeMonths) {
  const investmentTimeYears = investmentTimeMonths / 12;
  const finalValue = initialCapital * Math.pow(1 + interestRate, investmentTimeYears);
  return finalValue.toFixed(2);
}


rl.question('Type the initial capital: ', (initialCapital) => {
  rl.question('Type the interest rate (decimal): ', (interestRate) => {
    rl.question('Type the investment time (in months): ', (investmentTimeMonths) => {
      const result = calculateInvestment(Number(initialCapital), Number(interestRate), Number(investmentTimeMonths));
      console.log('The final value of the investment is:', result);
      rl.close();
    });
  });
});