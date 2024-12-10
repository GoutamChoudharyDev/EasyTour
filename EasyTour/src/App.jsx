// Import Components
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallary/Gallery'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

// Import React-Router-Dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  // React-router-Dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div>
      {/*Use React-Route-Dom */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
