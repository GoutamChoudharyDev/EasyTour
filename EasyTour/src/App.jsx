// Import Components
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallary/Gallery";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

// Import React-Router-Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route >
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
