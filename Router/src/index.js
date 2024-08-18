import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Layout from "./layout";
import Contact from "./component/contact/contact";
import Home from "./component/home/home";
import User from "./component/user/user";
import Github, { githubInfoLoader } from "./component/github/github";

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:userid" element={<User/>} />
      <Route
      path="github" 
      loader={githubInfoLoader}
      element={<Github/>} />
      <Route 
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
