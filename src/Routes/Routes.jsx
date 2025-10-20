import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps'
import Installation from '../pages/Installation/Installation';
import AppDetail from '../pages/AppDetails/AppDetails';
import AppError from '../pages/AppError/AppError';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch("/appData.json").then(res => res.json()),
            element: <Home></Home>
        },

        {
          path: '/apps',
          element: <Apps></Apps>,
          loader: () => fetch("/appData.json").then(res => res.json()),
        },

        {
          path: '/installation',
          element:<Installation></Installation>,
          loader: () => fetch("/appData.json").then(res => res.json()),
        },

        {
          path: '/app/:id',
          element: <AppDetail></AppDetail>,
          loader: () => fetch("/appData.json").then(res => res.json()),
          errorElement: AppError
        },
        
     ]
  },
]);