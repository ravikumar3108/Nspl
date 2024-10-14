let x = [1, 2, 3, 56, 6, true, "string", "usha", null,2];
console.log(x)

//  Array works on index number 
// 0,1,2,3,4,5,6
//  Access the value of our array 

let y = x[3]
console.log(y)

// length 
console.log(x.length)

// CHange the value of pur array 
x[2] = 10
console.log(x)

//  methods 
// pop()
// push()
// shift()
// unshift()
// slice()
// splice()
// concat()

x.pop()
x.push("usha2")
console.log(x)

//  slice :- Return a new array 
let ne = x.slice(0,5)
console.log(ne)


//  3 parameters 
// 1. index , 2. remove 3 . values 

x.splice(3,3,"Ravi",3,46,)
console.log(x)

//  concat : merge two and multiple array
let x1 = [1,2,3,4,6,7]
let x2 = [9,8,7,6,5,5]

let c = x1.concat(x2,x)
console.log(c)

//  sort 
let st = x.sort()
console.log(st)

delete x[0]
console.log(x)

x.reverse()
console.log(x)