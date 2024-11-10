import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import Layout from '../Layout/Layout';
import DetailPage from '../pages/detailPage/DetailPage';
import Contact from '../pages/contact/Contact';


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
            ] 
    },
  ]);

export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}