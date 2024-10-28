import React from "react";
import Navbar from "./Navbar";
import image from "./images/mountain-meditate-4.webp";

function Home() {
  let name = "Usha";
  let age = 20;

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
    </>
  );
}

export default Home;
