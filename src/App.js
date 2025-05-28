// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  Error,
  DeshBoardLayout,
 


} from './pages';

const router = createBrowserRouter([
      {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />, 

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
      {
        path: 'DeshBoardLayout',
        element: <DeshBoardLayout />
      },
      
     
   
  
]); 


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
