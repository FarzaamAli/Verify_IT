import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import Layout from '../Layout/Layout';
import DetailPage from '../pages/detailPage/DetailPage';


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
            ] 
    },
  ]);

export default function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}