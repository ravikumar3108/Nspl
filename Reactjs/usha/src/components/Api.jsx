import React, { useState } from "react";
import { json } from "react-router-dom";

function Api() {
  const [ApiData, setApiData] = useState([]);
  console.log(ApiData);

  // https://preview.colorlib.com/#cozastore
  //  Asynochnous functions
  //    Promises
  async function handlegetData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsondata = await data.json();
    // console.log(jsondata);
    setApiData(jsondata);
  }

  return (
    <>
      <button onClick={handlegetData}>Api Data fetch</button>
    </>
  );
}

export default Api;
