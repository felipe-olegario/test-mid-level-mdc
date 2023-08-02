function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    if (num === 2) {
      return true;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
}

function ListFirstTenPrimes(size) {
    const numbersPrimes = [];
    let number = 2;
  
    while (numbersPrimes.length < size) {
      if (isPrime(number)) {
        numbersPrimes.push(number);
      }
      number++;
    }
  
    return numbersPrimes;
  }
  const quantityPrimes = 10
  const firstPrimes = ListFirstTenPrimes(10);
  console.log(`First ${quantityPrimes} prime numbers:`, firstPrimes.toString());