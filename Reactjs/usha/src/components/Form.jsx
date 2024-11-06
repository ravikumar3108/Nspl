import React, { useState } from "react";

function Form1() {
  let [formData, setFormData] = useState();
  // console.log("formData", formData);

  function handleGetData(e) {
    // console.log(e)
    setFormData(e.target.value);
  }


  
  //  Data get into a single state
  let [data, setData] = useState();
  console.log(data);

  function getData(e) {
    setData({
      // spread operator : to save your cureent data and the past data
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  //  const obj1 =  {
  //     name : "ravi",
  //     class:"12th",
  //     rollno:"123"
  //   }

  return (
    <div>
      <form action="">
        <label htmlFor="">Email</label> <br />
        <input type="text" name="email" id="" onChange={getData} /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="text" name="password" id="" onChange={getData} /> <br />
        <label htmlFor="">confrime pass</label> <br />
        <input type="text" name="confirmpass" id="" onChange={getData} /> <br />
        <button type="submit">Submit</button> <br />
      </form>
    </div>
  );
}

export default Form1;
