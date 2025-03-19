// Import Components
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallary/Gallery";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
<<<<<<< HEAD
=======
import Group from "./Components/Group/Group";
>>>>>>> 7076e6d00a9ca52e6bc2527d2340d1d164011fce

// Import React-Router-Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
<<<<<<< HEAD
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
=======
  // // React-router-Dom
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/gallery",
  //     element: <Gallery />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Signup />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route >
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> 7076e6d00a9ca52e6bc2527d2340d1d164011fce

export default App;
