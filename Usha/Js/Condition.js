// Statements : if alse
//  Which is run when our condition is true .

//  synatax
// if (condiiton) {
//     // code to be executed
// } else {
// }

//  synatax
// if (condiiton) {
//     // code to be executed
// } else if (condition){
//  code
// } else{
//  default condition
// }

let x = 20;
if (x > 20) {
  console.log("x is greater than 20");
} else if (x < 20) {
  console.log("x is smaller than 20");
} else if (x == 20) {
  console.log("x is eqaul to 20");
} else {
  console.log("something eror");
}

// 1. Calculator
// 2. Signal
//  3 . Driving or not Driving

//  User input :- always return a string
// prompt()
//  parseInt() :- which is used to convert string into integer

let num1 = prompt("Enter first number", "Enter number");
let num = parseInt(num1);
let num2 = parseInt(prompt("Enter Second number"));
let op = prompt("Enter Operator");

if (op == "+") {
  console.log("Add is :", num + num2);
} else if (op == "-") {
  console.log(num - num2);
} else if (op == "*") {
  console.log(num * num2);
} else if (op == "/") {
  console.log(num / num2);
} else {
  console.log("operator not match");
}
