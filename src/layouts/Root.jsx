import { Outlet, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import Navbar from './../pages/shared/Navbar';
import Footer from './../pages/shared/Footer';
import bg from '../assets/bg.jpg'

const Root = () => {
  const { theme } = useTheme();

  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes('login') ||
    location.pathname.includes('register');

  return (
    <div className={`${theme}  ${theme?.colors?.background}`}>
      <div
        className={`max-w-7xl mx-auto lg:px-4 font-poppins ${theme?.colors?.textPrimary} min-h-[86vh] pb-8`}
       
      >
        {noHeaderFooter || <Navbar />}
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};
export default Root;
