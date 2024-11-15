import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Api() {
  const [ApiData, setApiData] = useState([]);
  console.log(ApiData);

  // https://preview.colorlib.com/#cozastore
  //  Asynochnous functions
  //    Promises
  async function handlegetData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsondata = await data.json();
    setApiData(jsondata.products);
    console.log(jsondata.products);
  }

  //  Arrow function
  // const arrFun = ()=>{

  // }

  //   Useffect Hook :- it is the side effect of our components

  useEffect(()=>{
    handlegetData()
  },[]);

  return (
    <>
      <div
        className="pr"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {ApiData.map((item) => {
          return (
            <>
              <div
                className="it"
                style={{
                  border: "1px solid black",
                  width: "33%",
                }}
              >
                <img src="" alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>Add to cart</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Api;
