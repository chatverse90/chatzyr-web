import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Home from "../Pages/Home";
import Layout4 from "../Layout/Layout4";
import ServicePage from "../Pages/ServicePage";
import ContactPage from "../Pages/ContactPage";
import FeaturesPage from "../Pages/FeaturesPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },                           
      ],
    },
    {
      path: "/",
      element: <Layout4></Layout4>,
      children: [
        {
          path: "/about",
          element: <AboutPage></AboutPage>,
        },
        {
          path: "/features",
          element: <FeaturesPage></FeaturesPage>,
        },
        {
          path: "/services",
          element: <ServicePage></ServicePage>,
        },
        {
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },
      ],
    },             
  ]);