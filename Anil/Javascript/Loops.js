let x = 1;
switch (x) {
  case 1:
    console.log("case1");
  // break;
  case 2:
    console.log("case2 ");
  // break;
  case 3:
    console.log("case3");
  // break;
  case 4:
    console.log("case4");
  // break;
  default:
    console.log("defaul");
}

//  Loops :- it is a statement which is run as welll as our condtion is true
// while
// do while
// for

// 1. initilise
// 2. condition
// 3. increment / decrement

let xy = 1;
//  syntax
// while (xy > 10) {
//     console.log(xy)
//     xy++
// }

// do {
//   console.log(xy);
//   xy++;
// } while (xy > 10);

let table = parseInt(prompt("enter a number"));

for (let y = 1; y <= 10; y++) {
  console.log(y * table);
}
