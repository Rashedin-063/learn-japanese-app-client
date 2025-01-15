import { Helmet } from "react-helmet-async";
import useLoadLessons from './../hooks/useLoadLessons';
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import PageTitle from "../components/PageTitle";
import { Link } from 'react-router-dom';
import { GiOpenBook } from 'react-icons/gi';
import bg from '../assets/bg2.avif';

const Lessons = () => {

  const [lessons, refetch, isLoading, isError, error] = useLoadLessons();

  // handling loading and error
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div className='container mx-auto px-4 py-8'>
      <Helmet>
        <title>Learn Japanese || Lessons</title>
      </Helmet>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {lessons?.map((lesson) => (
          <div
            key={lesson._id}
            className='group rounded-xl border bg-gradient-to-br from-blossom-haze via-rose-50 to-white border-slate-400 drop-shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 
                     hover:border-slate-500 animate-fade-in border-b-4 border-r-4 '
            style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'top',
                    backgroundBlendMode: 'overlay',
                   
                  }}
          >
            <div className='flex flex-col space-y-1 p-6 relative overflow-hidden'>
              <div
                className='w-12 h-12 bg-green-heaven/10 rounded-full flex items-center justify-center 
                          group-hover:scale-110 transition-all duration-500 ease-out
                          group-hover:bg-green-heaven/20 group-hover:translate-x-2'
              >
                <GiOpenBook className='w-6 h-6 text-green-heaven rotate-12' />
              </div>
            </div>

            <div className='p-6 pt-0'>
              <h3
                className='text-2xl font-bold transform transition-translate duration-300
                         group-hover:translate-x-2'
              >
                {lesson.lessonName}
              </h3>
              <p className=' transition-all duration-300  group-hover:translate-x-2'>
                Lesson {lesson.lessonNumber}
              </p>
            </div>

            <div className='flex items-center p-6 pt-0'>
              <Link
                to={`/single-vocabulary/${lesson.lessonNumber}`}
                className='w-full'
              >
                <button
                  className='w-full inline-flex items-center justify-center gap-2 
                           bg-green-heaven text-white py-3 px-4 rounded-md
                           transition-[transform,background-color,box-shadow] duration-500 ease-out
                           hover:bg-green-700 hover:shadow-lg
                           active:scale-95
                            relative overflow-hidden
                           before:absolute before:inset-0 
                           before:bg-white/20 before:translate-x-[-150%] before:skew-x-[45deg]
                           before:transition-transform before:duration-500
                           hover:before:translate-x-[150%]
                          '
                >
                  Start Learning
                  <GiOpenBook className='w-4 h-4' />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;