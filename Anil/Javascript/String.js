//  String : String are used to store our character values
//  string declares in single quote and double quotes
//   String counts the white spaces
//  string works on index number

let x = "Heloo my name is Anil. Anil is a good boy.";
console.log(x);
//  length of our string
console.log(x.length);

//  acess the vaalue of our string
console.log(x[3]);

//  String methods
//  replace()
//  replaceAll()
//  Slice()
// Concat()
// trim()
//  trimStart()
//  trimEnd()
// toUpperCase()
//  toLowerCase()
//  charAt()

let n = x.replaceAll("Anil","Ravi")
console.log(n)

let tr = "                Heloooo ANil                    "
console.log(tr.length)
let tr1 = tr.trim()
console.log(tr1.length)
let up = tr.toUpperCase()
console.log(up)

console.log(tr1.charAt(2))