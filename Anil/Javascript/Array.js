//  Array :- 
let arr = [1,2,3,5,6,8,9,"str",true,null]
console.log(arr)
//  Array works on index number 

//  Aceess the value of our array 
console.log(arr[7])

//  change the value of our array 
arr[3] = 10
console.log(arr)

//  length 
console.log(arr.length)

//  array methods 
// pop() : - remove last element of our array
// push() : - add element into the last position of our array
// shift() : remove the first element of our array 
// unshift() : add first element of our array 
// slice() : cut exist array into new aray
// splice()  : add value to a specific positions
//  3 parameters 1.index number 2.remove items .3.values 
// delete  : delete the value of aaray 
// reverse() : reverse the array 
// sort() : sorting the array 
//  concat() : merge the multiple array 

let arr1 = [1,2,3,5,6,8,9,"str",true,null]
let arr2 = ["ravi",2,3,5,6,8,9,"str",true,"ravi"]

arr1.pop()
arr1.pop()
arr1.push("Anil")
console.log(arr1)

arr1.shift()
arr1.unshift("Anil kumar")
console.log(arr1)

let sl = arr1.slice(2,6)
console.log(sl)

let sp = arr1.splice(3,1,"heloo","ravi")
delete arr1[0]
console.log(arr1)

let ct = arr2.concat(arr1,arr2)
console.log(ct)

