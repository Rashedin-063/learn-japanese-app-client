import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useLoadUser from '../hooks/useLoadUser';

const DefaultRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [userData] = useLoadUser();

  {
    console.log('role', userData.role);
  }
  // loading state
  if (loading || (user && !userData?.role)) {
    return (
      <div className='text-center flex justify-center items-center min-h-[70vh]'>
        <div className='flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96'>
          <div className='h-48 rounded-t bg-gray-700'></div>
          <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900'>
            <div className='w-full h-6 rounded bg-gray-700'></div>
            <div className='w-full h-6 rounded bg-gray-700'></div>
            <div className='w-3/4 h-6 rounded bg-gray-700'></div>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to='/login' />;
  }

  // Redirect based on user role
  if (userData?.role === 'admin') {
    return <Navigate to='/dashboard' />;
  }
  if (userData?.role === 'user') {
    return <Navigate to='/lessons' />;
  }

  // Render children if no redirection occurs
  return <div>{children}</div>;
};



DefaultRoute.propTypes = {
  children: PropTypes.element,
};

export default DefaultRoute;
