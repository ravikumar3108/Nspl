//  create a function component
//  import a Home component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {
  return (
    // <></> JSX fragments
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//  Routing Structure
// 1. First we install the react-router-dom package
// // SYntax of Routing
// <BrowserRouter>
// <Routes>
//   <Route path="" element/>
// </Routes>
// </BrowserRouter>
