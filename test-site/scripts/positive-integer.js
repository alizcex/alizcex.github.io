var getNumber = getPositiveNumber();
var primes = findPrimeNumbers(getNumber);

// Enter a positive number
function getPositiveNumber () {
  var number;
  inputNumberLoop : while (true) {
    number = parseInt(prompt("Enter a positive number"))
    if (Number.isInteger(number) && number > 0) {
      break inputNumberLoop;
    }
  }
  return number;
} 

// Loop for get prime number
function findPrimeNumbers (number) {
  var primeNumbers = [];
  primeNumbersLoop : for (var i = 2; i <= number; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        continue primeNumbersLoop;
      }
    }
    primeNumbers.push(i);
  }
  return primeNumbers
}


// Alert prime number result
function showPrimeNumbers (number, primeNumbers) {
  if (number > 0) {
    alert("For n = " + number + " prime numbers are \n" + primeNumbers.join(", "));
  }
}

showPrimeNumbers(getNumber, primes);