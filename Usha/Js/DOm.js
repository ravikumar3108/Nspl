// Dom - Document Object Model

//  With the help of we can access , change, append , remove , createElements
//  with the help of we can apply style properties

//  Access the dom elements
// getElementsById()
// getElementsByClassNmae()
// getElementsByTagName()

document.getElementById("head");

//  add the Html into our elememnts
document.getElementById("head").innerHTML = "Heloo My name is .....";
//  by the class
document.getElementsByClassName("head")[0].innerHTML = "My age is ....";

let div = document.getElementsByClassName("div")[0];
let h1 = document.createElement("h1");
let a = document.createElement("a");
let h2 = document.createElement("h2");
div.append(h1);
div.append(h2);
div.append(a);
div.removeChild(h2)

let a1 = a.setAttribute("class", "p1");
let a2 = a.setAttribute("href", "www.");
let remob = a.removeAttribute("class")

document.getElementById("head").style.backgroundColor = "green"
document.getElementById("head").style.color = "white"
document.getElementById("head").style.backgroundColor = "green"