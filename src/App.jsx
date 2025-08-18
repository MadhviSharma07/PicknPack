import React from "react";
import Home from "./components/Layout/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Layout/Home/Category Components/Fruits";
import SeaFood from "./components/Layout/Home/Category Components/SeaFood";
import AllProducts from "./components/Layout/Home/Products Components/AllProducts";
import Layout from "./components/Layout/Layout";
import Dairy from "./components/Layout/Home/Category Components/Dairy";
import AboutUs from "./components/Layout/Navbar Components/Navbarpages/AboutUS";
import Process from "./components/Layout/Home/Process Components/Process";
import ContactUs from "./components/Layout/Navbar Components/Navbarpages/ContactUs";
import Product from "./components/Layout/Home/Products Components/Product";
import { GroceryProvider } from "./components/Context/GroceryContext";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout  />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/process",
          element: <Process />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <GroceryProvider><RouterProvider router={router} /></GroceryProvider>;
}

export default App;
