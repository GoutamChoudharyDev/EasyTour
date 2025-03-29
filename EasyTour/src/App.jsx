// Import Components
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallary/Gallery";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

// Import React-Router-Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "./Components/Logout/Logout";

// Import Protected Route
import ProtectedRoute from "./Components/ProtectedRoute.jsx/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path="/" element={<Login />}></Route >
          <Route path="/home" element={<Home />}></Route >
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
