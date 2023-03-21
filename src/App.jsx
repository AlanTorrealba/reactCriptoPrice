import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
    // children: [
    //   {
    //     path: "contacts/:contactid",
    //     element:<Contact /> ,
    //   },
    // ],
  },
  {
    path: "/about",
    element: <About />,
  },

]);

function App() {


  

  return (
    <div classname="main"> 
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
