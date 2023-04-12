import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from "./components/Navbar";
import Errorpage from "./routes/Errorpage";
import Login from "./routes/Login";
import Employeecreate from "./routes/Employeecreate";
import Login2 from "./routes/Login2";
import Dashboard from "./routes/Dashboard";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1>Error</h1>,

//   },
//   {
//     path: "/about",
//     element: <About />,
//   },

// ]);

function App() {
  return (
    //   <div classname="main">
    //   <RouterProvider router={router} />
    // </div>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Login2/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Employee" element={<Employeecreate/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
