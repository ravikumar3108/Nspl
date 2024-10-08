//  1. Arithmetic operators
// +
// -
// *
// /
// % modulus
// ++ increment
// -- decrement

// let num1 = 10;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(num1 + num2);
// console.log(sum);
// // console.log(sum + num1)

// // modulus == remainder
// let num3 = 3
// console.log(num2 % num3 )

// // increment
// // a) prefix
let num4 = 10;
let inc = ++num4;

console.log(num4);
console.log(inc);

// // postfix
let num5 = 10;
let inc1 = num5++;
let inc2 = num5++;

console.log(num5);
console.log(inc1);
console.log(inc2);

// //  2. Assignmnt operators
// // =
// // +=
// // -=
// // *=
// // /=
// // %=

// let c = 60;
// // c = 70
// let assign = c += 40;
// console.log(c);

// let x = 40
// let y = 53

// let v = y + 10
// y %= 2
// console.log(y)

//  3. Comparision operators = works on bollean values
// == : check the value of our variables
// === : check value and the type
// !=  opposite of ==
// !==  opposite ===
// >
// <
// >=
// <=

let x = 10;
let y = 20;
let z = "10";
let a = 10;

let cp = x == y;
cp = x != z;

let cp1 = z !== a;
console.log(cp);
console.log(cp1);

let c = x <= y
console.log(c)

//  4. Logical operators
// and &&
// or ||
// not !

// AND op
// true &&  true = true
// true &&  false = false
// false &&  true = false
// false &&  false = false

//  OR op
// true &&  true = true
// true &&  false = true
// false &&  true = true
// false &&  false = false

// let x = 10;
// let y = 20;
// let z = "10";
// let a = 10;

// // let cp = x == y && y == z;
// // console.log(cp)

// let cp = x == y || !(z == a);
// console.log(cp);
