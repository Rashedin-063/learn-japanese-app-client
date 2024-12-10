import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './../error/ErrorPage';
import Root from '../layouts/Root';
import Home from '../pages/Home';


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
      
    ],
  },

]);

export default router;
