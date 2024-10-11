let expression = 10;

switch (expression) {
  case 1:
    console.log("case1");
    break;
  case 2:
    console.log("case2");
    break;
  case 3:
    console.log("case3");
    break;
  default:
    console.log("default");
}

//  Loops :- it is a statement which is run as welll as our condtion is true
// while
// do while
// for

// 1. initilise
// 2. constion
// 3. increment / decrement

let x = 1;

//  loop syntax

// while (x > 10) {
//   console.log(x);
//   x++;
// }

do {
  console.log(x);
  x++;
} while (x > 10);

for (let y = 1; y < 10; y++) {
  console.log(y);
}
