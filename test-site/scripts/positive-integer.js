var number;
var primeNumbers = [];

// Enter a positive number
inputNumberLoop : while (true) {
    number = parseInt(prompt("Enter a positive number"))
    if (Number.isInteger(number) && number > 0) {
      break inputNumberLoop;
    }
}

// Loop for get prime number
primeNumbersLoop : for (var i = 2; i <= number; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        continue primeNumbersLoop;
      }
    }
    primeNumbers.push(i);
  }

// Alert prime number result
if (number > 0) {
    alert("For n = " + number + " prime numbers are \n" + primeNumbers.join(", "));
}

// Without label
// var isPrimeNumber;
// for (var i = 2; i <= number; i++) {
//     isPrimeNumber = true;
  
//     for (var j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrimeNumber = false;
//         break;
//       }
//     }
  
//     if (isPrimeNumber) {
//       primeNumbers.push(i);
//     }
//   }