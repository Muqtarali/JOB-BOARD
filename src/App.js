
import './App.css';
import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import {
   HomeLayout,
 Register,
  Login,
  DashboardLayout,
  Landing
}
  from './component';


  const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
       
        element: <Landing />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
  },
  {
    path: 'Login',
    element: <Login />,
  },
  {
    path: 'Register',
    element: <Register />,
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
 };
 export default App;