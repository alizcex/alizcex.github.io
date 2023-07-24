//Rewriting code arrow function
// let age = prompt("What is your age?", 18); 
// let welcome; 
// if (age < 18) { 
//     welcome = function() { 
//         alert("Hello!"); 
//     }; 
// } else { 
//     welcome = function() {
//        alert("Greetings!"); 
//    }; 
// } 
// welcome(); 

let age = prompt("What is your age?", 18); 
let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greeting!"); 
welcome();