import React from "react";

// function Homechild(props) {
//   return (
//     <div>
//         <h1>Child Componene</h1>
//         <h1>My name is {props.name} </h1>
//     </div>
//   )
// }

// export default Homechild

function Homechild({ name, arr1 }) {
  return (
    <div>
      <h1>Child Componene</h1>
      <h1>My name is {name} </h1>
      {/* <h1>{arr1[2]}</h1> */}
    </div>
  );
}

export default Homechild;
