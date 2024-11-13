//  Create a Function Componets 
import "./App.css"
import React from "react";
import Home from "./Components/Home"

function App(){
  return(
    // Jsx Fragments 
    <>  
    <h1>Heading1 </h1>
    {/*  Calling the function components  */}
    <Home/>
    <Home/>
    <Home/>
    <Home/>
    <Home/>
    <Home/>
    <Home/>
    </>

  )
}

export default App