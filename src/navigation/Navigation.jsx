import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import Layout from '../Layout/Layout';
import DetailPage from '../pages/detailPage/DetailPage';
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
              path: "/",
              element: <App />
            },
            {
              path: "/detailPage",
              element: <DetailPage />
            },
            {
              path: "/contact",
              element: <Contact />
            },
            {
              path: "/about",
              element: <About />
            },
            ] 
    },
  ]);

export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}