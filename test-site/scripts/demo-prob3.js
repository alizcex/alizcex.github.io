//Demo-prob3
//Define an arrow function divideByTwo which accepts an integer and returns that number divided by 2.
//The program also checks whether the entered text is an integer or not
//The program will keep asking the user until a user enters a valid integer

let divideByTwo = (num) => num / 2;

let isInteger = (input) => {
    let num = Number(input);
    return Number.isInteger(num);
};

let main = () => {
    let input = prompt("Enter number to divide by two");
    isInteger(input) ? alert(divideByTwo(Number(input))) : main();
};

main();

//Ajarn Code
// let devideByTwo = n => (n/2)
// do {
//     inputInt = Number(prompt("Enter an Integer"))
//     if (input_int && Number.isInteger(input_int)) {
//         alert(devideByTwo(input_int));
//         break;
//     }
// } while (true);