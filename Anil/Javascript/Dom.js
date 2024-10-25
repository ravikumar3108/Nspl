// Dom - Document Object Model

//  With the help of we can access , change, append , remove , createElements
//  with the help of we can apply style properties

//  Access the dom elements
// getElementsById()
// getElementsByClassNmae()
// getElementsByTagName()


//  by id 
document.getElementById("head").innerHTML = "Heloo My name is Anil"



// by classmname
document.getElementsByClassName("head")[0].innerHTML = "My age is 22"

//  create elements 
let div = document.createElement("div")
let a =  document.createElement("a")

let para = document.getElementById("para")

para.appendChild(a)
para.appendChild(div)

