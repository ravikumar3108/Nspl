import React, { useState } from "react";

function LoginForm() {
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

  function handleSubmit(e) {
    e.preventDefault(); // to stop the auto form refresh
    console.log("function run");
    let getUser = JSON.parse(localStorage.getItem("users"));
    if (getUser.email == data.email && getUser.password == data.password) {
      alert("Welcome ");
    } else {
      alert("Your email and password doesnot match");
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label> <br />
        <input type="text" name="email" id="" onChange={getData} /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="text" name="password" id="" onChange={getData} /> <br />
        <button type="submit">Submit</button> <br />
      </form>
    </div>
  );
}

export default LoginForm;
