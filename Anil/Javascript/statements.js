//  If else Statements : it is a statement which is run when our condition is true.
// Multiple condtions : ww are used  else if

//  Syntax
// if (conditions){

// }else{
// default statement
// }

// let x = 12;
// if (x > 10) {
//   console.log("x is greater");
// } else {
//   console.log("x is smaller");
// }

let x = 10;
if (x > 10) {
  console.log("x is greater");
} else if (x == 10) {
  console.log(" x is equal to 10");
} else {
  console.log("x is smaller");
}

let name1 = "anil";

if (name1 == "anil") {
  console.log("Not equal to anil");
} else if (name1 == "anil") {
  console.log(" equakl tp anil");
} else {
  console.log("something wrong");
}

// User Input == written always a string.
// Convert string into number we can use parseInt method

// let userinp = prompt("Enter Your name")
// console.log(userinp)

// let cal1 = parseInt(prompt("Enter your First Number"));
// let cal2 = parseInt(prompt("Enter your Second  Number"));
// let op = prompt("Enter your Operator");

// if (op == "+") {
//   console.log(cal1 + cal2);
// } else if (op == "-") {
//   console.log(cal1 - cal2);
// } else if (op == "*") {
//   console.log(cal1 * cal2);
// } else if (op == "/") {
//   console.log(cal1 / cal2);
// } else {
//   console.log("operator is not matched");
// }

let dr = parseInt(prompt("Enter your age"));

if (dr >= 18 && dr <= 65) {
  console.log("You are eligible for driving");
} else if (dr < 18) {
  console.log("you are not eligible fo driving");
} else if (dr > 65) {
  console.log("you are not eligible fo driving");
} else {
  console.log("you are immortal");
}
