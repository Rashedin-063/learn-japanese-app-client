import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

    // useEffect(() => {
    //   const handleLoad = () => {
    //     setLoading(false);
    //     setTimeout(() => setHidden(true), 800); // Delay to match animation duration
    //   };

    //   if (document.readyState === 'complete') {
    //     handleLoad();
    //   } else {
    //     window.addEventListener('load', handleLoad);
    //   }

    //   return () => window.removeEventListener('load', handleLoad);
  // }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setHidden(true);
      navigate('/lessons')
    }, 2000);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-50 ${
        loading ? '' : 'opacity-0 translate-y-[-100%]'
      } transition-all duration-300 ease-in-out`}
    >
      <h1 className='text-center pt-60 text-2xl md:text-3xl xl:text-4xl font-playwrite font-semibold '>
        Welcome to Learn Japanese
      </h1>
    </div>
  );
};
export default Home;
