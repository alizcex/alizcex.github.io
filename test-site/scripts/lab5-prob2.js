// Enter a positive number
function readInput () {
  let numbers = []
  let inputNumber;
  inputNumberLoop : while (true) {
    inputNumber = parseInt(prompt("Enter a positive number"))
    if (Number.isInteger(inputNumber) && inputNumber < 0) {
      break inputNumberLoop;
    }
    numbers.push(inputNumber);
  }
  return numbers;
}

// Calculate Average, Min, Max
function displayStats(numbers) {
  let average = 0;
  let min = 0;
  let max = 0;

  if (numbers.length > 0) {
    average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    alert("For the list " + numbers.join(", ") + " the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
  } else if (numbers.length === 0 || numbers[0] < 0) {
    average = 0;
    min = 0;
    max = 0;
    alert("For the list that is empty, the average is " + average + ", the minimum is " + min + ", and the maximum is " + max);
  }
}
  
let list = readInput();
displayStats(list);