// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,


} from './pages';

const router = createBrowserRouter([
      {
        path: '/',
        element: <HomeLayout />,

      },
      {
      path: 'landing',
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
     
   
  
]); 


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
