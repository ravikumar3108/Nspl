//  Function :- it is a block of code which is run when our function is call
//  function is reusable

//  syntax

// function Function01(){
//     //  code to be executed
// }

//  call the function
//  by tha name of our function
// Function01()

function fun1() {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log("function s running", c);
}

fun1();

//  Parameters : which is define into the create function parenthesis
// arguments :  which is define into the call function parenthesis

// function fun2(num2, op, num = 13) {
//   if (op == "+") {
//     console.log("Add is :", num + num2);
//   } else if (op == "-") {
//     console.log(num - num2);
//   } else if (op == "*") {
//     console.log(num * num2);
//   } else if (op == "/") {
//     console.log(num / num2);
//   } else {
//     console.log("operator not match");
//   }
// }

// fun2((num2 = 78), (num = 12), (op = "+"));
// let a = parseInt(prompt("enter a number"))
// let b = parseInt(prompt("enter a number"))
// let c = prompt("enter a number")
// fun2(a,b,c);

//  default parameters
// Default arguments
//  return value
//  default values

function fun3() {
  let a = 20;
  let b = 20;
  let c = 10 * a;

  return c;
}

let x = fun3();

let sum = x + 50;
console.log(sum);

function fun4(a) {
  let c = 10 * a;
  console.log(c);
}

// fun4(parseInt(prompt("Enter an number ")));
fun4(10);
fun4(11);
fun4(12);
fun4(13);
fun4(4);
fun4(10);

