import React, { useState } from "react";

function UseState1() {
  //  Usestate is used to accces the state of our component and manuplate it
  // const [initailValue,setIntitlaValue] = useState()

  //    making a Counter

  let [data, setData] = useState(0);

  function CounterAdd(){
    setData(data += 1)
  }
  function CounterSub(){
    setData(data -= 1)
  }

  return (
    <div>
      <h1>my number is {data} </h1>

        <h1>My name is .....</h1>

      <button onClick={CounterAdd}>Add</button>
      <button onClick={CounterSub}>Sub</button>
    </div>
  );
}

export default UseState1;
