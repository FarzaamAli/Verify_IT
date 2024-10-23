import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import Layout from '../Layout/Layout';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
              path: "/",
              element: <App />
            }
            ] 
    },
  ]);

export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}