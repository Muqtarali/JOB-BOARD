
import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/navbar';
import HomeLayout from './component/HomeLayout';


  const router = createBrowserRouter([
    {
      path:'/',
      element: <HomeLayout />,

    },
    {
      path:'/navbar',
      element:<Navbar/>
    }
  ])

const App = () => {
  return <RouterProvider router={router} />;
 };
 export default App;