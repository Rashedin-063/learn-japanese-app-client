import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './../error/ErrorPage';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from './../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Lessons from '../pages/Lessons';
import DefaultRoute from './DefaultRoute';
import Tutorials from './../pages/Tutorials';
import Courses from './../pages/Courses';
import AdminRoute from './AdminRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import AddLesson from '../pages/dashboard/AddLesson';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <DefaultRoute>
            <Home />
          </DefaultRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/lessons',
        element: (
          <PrivateRoute>
            <Lessons />
          </PrivateRoute>
        ),
      },
      {
        path: '/tutorials',
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: '/courses',
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <AdminRoute>
            <Lessons />
          </AdminRoute>
        ),
      },
      {
        path: 'add-lessons',
        element: (
          <AdminRoute>
            <AddLesson />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
