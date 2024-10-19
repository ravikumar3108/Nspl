//  Function :- it is a block of code which is run when our function is call
//  function is reusable

//  syntax

// function Function01(){
//     //  code to be executed
// }

//  call the function :-  by tha name of our function
// Function01()

function fun1() {
  console.log("function i srunning");
}
fun1();

function Sum() {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}

Sum();

//  Parameters : which is define into the create function parenthesis
// arguments :  which is define into the call function parenthesis

// function Sum1(a, b) {
//   let c = a + b;
//   console.log(c);
// }

// Sum1(12, 90);
// Sum1(124, 90);
// Sum1(121, 90);
// Sum1(10, 90);

function fun2(num2, op, num) {
  if (op == "+") {
    console.log(`First Number : ${num} Second number is ${num2}`, num + num2);
  } else if (op == "-") {
    console.log(num - num2);
  } else if (op == "*") {
    console.log(num * num2);
  } else if (op == "/") {
    console.log(num / num2);
  } else {
    console.log("operator not match");
  }
}

// fun2(parseInt(prompt()), prompt(), parseInt(prompt()));
// let a = parseInt(prompt());
// let b = prompt();
// let c = parseInt(prompt());
// fun2(a, b, c);

//  default parameters
// default arguments 

function Sum1(a, b = 10) {
  let c = a + b;
  console.log(c);
}
Sum1(b = 10, a= 40);


