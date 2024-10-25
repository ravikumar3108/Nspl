//  create a function component
//  import a Home component
import Home from "./components/Home"


function App() {
  return (
    // <></> JSX fragments
    <>
      <h1>Heloo</h1>
      {/*  Call the function  */}  
      <Home/>
    </>
  );
}

export default App;
