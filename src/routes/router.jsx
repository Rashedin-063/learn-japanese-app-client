import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './../error/ErrorPage';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from './../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Lessons from '../pages/Lessons';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/lessons',
        element: <PrivateRoute>
          <Lessons/>
        </PrivateRoute>
      }
    ],
  },

]);

export default router;
