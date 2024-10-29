import React from "react";
import Navbar from "./Navbar";
import image from "./images/mountain-meditate-4.webp";
import Homechild from "./Homechild";

function Home() {
  let name = "Usha";
  let age = 20;
  let arr1 = [1, 2, 3, 4, 5, 7, , 8, 0];

  return (
    <>
      <h1 className="para">Heloo</h1>
      {/*  Image  */}
      <img src={image} alt="" />
      {/*  inline csss */}
      <h1
        style={{
          color: "green",
          paddingLeft: "30px",
        }}
      >
        {/* Apply js into the Html content  */}
        Hi my name is {name}. my age is {age}{" "}
      </h1>

      {/*  Props :- its stands for properties.
      
        which is used to send data one compo to another compo..
      */}

      {/*  left side : props name
    right side : props value/data

*/}
      <Homechild arr1={arr1} name={name} />
    </>
  );
}

export default Home;
